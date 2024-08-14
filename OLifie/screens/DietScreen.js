import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Modal, Button, Alert, ActivityIndicator, TextInput, ScrollView } from 'react-native';
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
    meals: [],
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [waterModalVisible, setWaterModalVisible] = useState(false);
  const mealLoggingRef = useRef(null);

  const updateData = (newData) => {
    setData(newData);
  };

  const handleWaterConsumption = (amount) => {
    if (mealLoggingRef.current) {
      mealLoggingRef.current.addWaterIntake(amount);
    }
    setWaterModalVisible(false);
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
        const { foodName, nutrition, calories } = response;
        if (mealLoggingRef.current) {
          mealLoggingRef.current.addMeal(foodName, nutrition, calories);
        }
        Alert.alert('Success', 'Data updated successfully.');
        setFoodName('');
        setQuantity('');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <ImageBackground style={styles.background}>
      <Text style={styles.headerText}>Diet</Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setWaterModalVisible(true)} style={styles.waterIconContainer}>
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
            <ScrollView>
              <MealLogging
                ref={mealLoggingRef}
                updateData={updateData}
              />
            </ScrollView>
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
      <Modal visible={waterModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Select Water Intake</Text>
            <Button title="250 ml" onPress={() => handleWaterConsumption(250)} />
            <Button title="500 ml" onPress={() => handleWaterConsumption(500)} />
            <Button title="750 ml" onPress={() => handleWaterConsumption(750)} />
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
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: 20,
    borderRadius: 15,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  cameraText: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  mealListContainer: {
    flex: 2,
    marginLeft: 20,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    height: 200, // Fixed height for the list container
    width: '90%', // Increased width for the list container
  },
  listTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center', // Center the text
  },
  menuButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  input: {
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loadingText: {
    color: '#fff',
    marginTop: 10,
  },
  errorContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#fff',
    marginTop: 10,
  },
});

export default DietScreen;

