import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Modal, Button, Alert, ActivityIndicator, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import MealLogging from '../components/MealLogging';
import ApiHandler from '../components/ApiHandler';

const DietScreen = ({ navigation }) => {
  const [data, setData] = useState({
    waterConsumed: 0,
    nutrition: 2000,
    calories: 1500,
    intakeCount: 3,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [meals, setMeals] = useState([
    { name: 'Breakfast: Oatmeal', time: '8:00 AM' },
    { name: 'Lunch: Salad', time: '1:00 PM' },
    { name: 'Dinner: Grilled Chicken', time: '7:00 PM' },
  ]);

  const updateData = (newData) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const handleWaterConsumption = (amount) => {
    setData((prevData) => ({
      ...prevData,
      waterConsumed: prevData.waterConsumed + amount,
    }));
    setModalVisible(false);
  };

  const handleImageCapture = async () => {
    const result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      setImageUri(result.uri);
      setModalVisible(true);
    }
  };

  const handleApiCall = async () => {
    if (!foodName) {
      Alert.alert('Error', 'Food name is required.');
      return;
    }
    setModalVisible(false);
    setLoading(true);
    try {
      const response = await ApiHandler(foodName, quantity);
      if (response === 'Not a food Image') {
        Alert.alert('Error', 'Uploaded image is not a food.');
      } else {
        const { nutrition, calories, foodName } = response;
        updateData({
          nutrition: data.nutrition + nutrition,
          calories: data.calories + calories,
          intakeCount: data.intakeCount + 1,
        });
        const currentTime = new Date().toLocaleTimeString();
        setMeals((prevMeals) => [
          ...prevMeals,
          { name: foodName, time: currentTime },
        ]);
        Alert.alert('Success', 'Data updated successfully.');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      setTimeout(() => setError(false), 3000); // Reset error state after 3 seconds
    }
  };

  return (
    <ImageBackground style={styles.background}>
      <Text style={styles.headerText}>Diet</Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleImageCapture} style={styles.waterIconContainer}>
          <Ionicons name="water" size={150} color="#ADD8E6" style={styles.waterIcon} />
        </TouchableOpacity>
        <Text style={[styles.waterText, data.waterConsumed > 2000 && { color: 'red' }]}>
          Water Consumed: {data.waterConsumed} ml
        </Text>
        <View style={styles.iconRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="nutrition" size={50} color="#fff" />
            <Text style={styles.iconLabel}>Nutrition</Text>
            <Text style={styles.iconStat}>{data.nutrition} kcal</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons name="flame" size={50} color="#fff" />
            <Text style={styles.iconLabel}>Calories</Text>
            <Text style={styles.iconStat}>{data.calories} kcal</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons name="stats-chart" size={50} color="#fff" />
            <Text style={styles.iconLabel}>Intake</Text>
            <Text style={styles.iconStat}>{data.intakeCount} meals</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={handleImageCapture} style={styles.cameraContainer}>
            <Ionicons name="camera" size={60} color="#fff" />
            <Text style={styles.cameraText}>Upload your meal to scan with your AI companion</Text>
          </TouchableOpacity>
          <View style={styles.mealListContainer}>
            <Text style={styles.listTitle}>Diet List</Text>
            <MealLogging updateData={updateData} imageUri={imageUri} setLoadingState={setLoading} setErrorState={setError} meals={meals} />
          </View>
        </View>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Enter Food Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Food Name"
              value={foodName}
              onChangeText={setFoodName}
            />
            <Text>Enter Quantity (optional)</Text>
            <TextInput
              style={styles.input}
              placeholder="Quantity"
              value={quantity}
              onChangeText={setQuantity}
            />
            <Button title="Submit" onPress={handleApiCall} />
          </View>
        </View>
      </Modal>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#00ff00" />
          <Text style={styles.loadingText}>Processing...</Text>
        </View>
      )}
      {error && (
        <View style={styles.errorContainer}>
          <Image source={require('../assets/error-icon.png')} style={styles.errorIcon} />
          <Text style={styles.errorText}>Connection failed</Text>
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
    padding: 30,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  waterIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
  },
  waterIcon: {
    alignSelf: 'center',
  },
  waterText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconLabel: {
    color: '#fff',
    marginTop: 10,
  },
  iconStat: {
    color: '#fff',
    marginTop: 5,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cameraContainer: {
    width: '30%',
    alignItems: 'center',
  },
  cameraText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  mealListContainer: {
    width: '70%',
    padding: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  menuButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    padding: 5,
    width: '100%',
  },
  loadingContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    marginTop: 10,
  },
  errorContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    alignItems: 'center',
  },
  errorText: {
    color: '#ff0000',
    marginTop: 10,
  },
  errorIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    marginTop: 20,
  },

  errorIcon:{
    width: 50, // Adjusted size
    height: 50, // Adjusted size
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    marginTop : 20,
  },
  
});

export default DietScreen;

