import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealLogging = ({ updateData, imageUri, setLoadingState, setErrorState }) => {
  const [waterConsumed, setWaterConsumed] = useState(0);
  const [nutrition, setNutrition] = useState(2000); // Example value
  const [calories, setCalories] = useState(1500); // Example value
  const [intakeCount, setIntakeCount] = useState(3); // Example value

  useEffect(() => {
    updateData({ waterConsumed, nutrition, calories, intakeCount });
  }, [waterConsumed, nutrition, calories, intakeCount]);

  const meals = [
    { name: 'Breakfast: Oatmeal', time: '8:00 AM' },
    { name: 'Lunch: Salad', time: '1:00 PM' },
    { name: 'Dinner: Grilled Chicken', time: '7:00 PM' },
  ];

  return (
    <View style={styles.container}>
      {meals.map((meal, index) => (
        <View key={index} style={styles.mealRow}>
          <Text style={styles.mealName}>{meal.name}</Text>
          <Text style={styles.mealTime}>{meal.time}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  mealRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  mealName: {
    fontSize: 15,
    color: '#fff',
  },
  mealTime: {
    fontSize: 15,
    color: '#fff',
  },
});

export default MealLogging;
