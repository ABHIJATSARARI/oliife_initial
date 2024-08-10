import * as Notifications from 'expo-notifications';

const NotificationService = {
  async scheduleNotification(title, body, time) {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: title,
          body: body,
        },
        trigger: { time },
      });
    } catch (error) {
      console.error('Error scheduling notification:', error);
      throw error;
    }
  },
};

export default NotificationService;
