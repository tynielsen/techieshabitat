import { useState, useEffect, useCallback } from 'react';
import type { Notification } from '../types';

export function useHealthReminders() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback((type: 'water' | 'stand') => {
    const notification: Notification = {
      id: Date.now(),
      message: type === 'water' ? 'Time to drink water! 💧' : 'Stand up and stretch! 🧘',
      type,
    };

    setNotifications(prev => [...prev, notification]);

    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== notification.id));
    }, 5000);
  }, []);

  useEffect(() => {
    // For demo: 10 seconds for water, 15 seconds for stand
    // Production: 3600000 (1 hour) and 1800000 (30 min)
    const waterInMinutes = 1800000 / 60;
    const standIntervalInMinutes = 1800000 / 60;

    const waterInterval = setInterval(() => addNotification('water'), waterInMinutes);
    const standInterval = setInterval(() => addNotification('stand'), standIntervalInMinutes);

    return () => {
      clearInterval(waterInterval);
      clearInterval(standInterval);
    };
  }, [addNotification]);

  const dismissNotification = useCallback((id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  return { notifications, dismissNotification };
}
