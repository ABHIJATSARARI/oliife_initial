import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealLogging = forwardRef(({ updateData }, ref) => {
  const [waterConsumed, setWaterConsumed] = useState(0);
  const [nutrition, setNutrition] = useState(2000); // Example value
  const [calories, setCalories] = useState(1500); // Example value
  const [intakeCount, setIntakeCount] = useState(3); // Example value
  const [meals, setMeals] = useState([
    { name: 'Oatmeal', time: '8:00 AM' },
    { name: 'Salad', time: '1:00 PM' },
    { name: 'Grilled Chicken', time: '7:00 PM' },
  ]);

  useEffect(() => {
    updateData({ waterConsumed, nutrition, calories, intakeCount });
  }, [waterConsumed, nutrition, calories, intakeCount]);

  // Expose methods to parent component via ref
  useImperativeHandle(ref, () => ({
    addMeal(foodName, nutritionValue, caloriesValue) {
      setNutrition(prev => prev + nutritionValue);
      setCalories(prev => prev + caloriesValue);
      setIntakeCount(prev => prev + 1);

      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMeals(prevMeals => [
        ...prevMeals,
        { name: foodName, time: currentTime },
      ]);
    },

    addWaterIntake(amount) {
      setWaterConsumed(prev => prev + amount);
    },
  }));

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
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  mealRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%', // Use full width of the list container
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
