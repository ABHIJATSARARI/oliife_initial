const API_BASE_URL = 'https://api.example.com';

export const fetchHealthMetrics = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health-metrics`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching health metrics:', error);
    throw error;
  }
};

export const fetchSleepData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/sleep-data`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching sleep data:', error);
    throw error;
  }
};

// Add more API service functions as needed
