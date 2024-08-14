// components/ChatComponent.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyDQ9BEt8qpggYKMZjcTowljOhmwnLhq1fM'; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    systemInstruction: "For there you need to call user or pronounse him/her as buddy , in this converstation you working as a ai campion for user heath and any other kind of help to organize its daily life.",
  });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

const ChatComponent = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = async () => {
    if (inputText.trim() === '') return;

    const userMessage = inputText;
    const preWrittenText = 'Pre-written text: ';
    const messageToSend = preWrittenText + userMessage;

    // Add user message to chat history
    setChatHistory([...chatHistory, { sender: 'user', text: userMessage }]);
    setInputText('');

    // Call the API
    const chatSession = model.startChat({
      generationConfig,
      history: chatHistory.map(message => ({ role: message.sender, content: message.text })),
    });

    const result = await chatSession.sendMessage(messageToSend);
    const aiResponse = result.response.text();

    // Add AI response to chat history
    setChatHistory([...chatHistory, { sender: 'user', text: userMessage }, { sender: 'ai', text: aiResponse }]);
  };

  const handleClearChat = () => {
    setChatHistory([]);
  };

  return (
    <View style={styles.chatContainer}>
      <ScrollView style={styles.chatHistory}>
        {chatHistory.map((message, index) => (
          <View key={index} style={message.sender === 'user' ? styles.userMessage : styles.aiMessage}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={20} color="#fff" />
        <TextInput
          style={styles.input}
          placeholder="Talk with your AI champion"
          placeholderTextColor="#fff"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity onPress={handleSend}>
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      {chatHistory.length > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={handleClearChat}>
          <Text style={styles.clearButtonText}>Clear Chat</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    width: '100%',
  },
  chatHistory: {
    flex: 1,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#1C2541',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  messageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(28, 37, 65, 0.8)',
    borderRadius: 20,
    padding: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
  },
  clearButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChatComponent;
