import axios from 'axios';

const AIModelService = {
  async getAIResponse(prompt) {
    try {
      const response = await axios.post('https://your-ai-model-api.com/endpoint', { prompt });
      return response.data;
    } catch (error) {
      console.error('Error fetching AI response:', error);
      throw error;
    }
  },
};

export default AIModelService;
