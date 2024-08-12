// components/ApiHandler.js
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyBkKd5xkNafogsquCZZtUOmWU3LlCS5YNQ'; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro',
  systemInstruction: `In this task, you will act as a diet analyzer. You will receive food name as input, and your response should return only the food name and below metric approximate number of the food do not return any other info, and if the name is not a food return the response "Not a food Image". If no specific details are given, assume the quantity to be 1, also for nutrition return as the scale of 100 via collaborative info from different metrics like if food has Fat: 80-100 grams\nSaturated Fat: 32-40 grams\nCarbohydrates: 240-300 grams\nProtein: 80-100 grams\nSodium: 4000-5600 milligrams. then find the collaborative percentage and in the nutrition section return it as a whole number: \n1. Nutrition:\n2. Calories:`,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

const ApiHandler = async (foodName, quantity) => {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: 'user',
        parts: [
          { text: `${foodName}\nQuantity: ${quantity || 1}` },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(`${foodName}\nQuantity: ${quantity || 1}`);
  const responseText = result.response.text();

  if (responseText.includes('Not a food Image')) {
    return 'Not a food Image';
  }

  const [nutritionLine, caloriesLine] = responseText.split('\n').slice(1, 3);
  const nutrition = parseInt(nutritionLine.split(': ')[1], 10);
  const calories = parseInt(caloriesLine.split(': ')[1], 10);

  return { nutrition, calories, foodName };
};

export default ApiHandler;


