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
    }, 500);
  }, []);

  useEffect(() => {
    const waterTiming = 1800000;
    const standIntervalTime = 3600000;

    const waterInterval = setInterval(() => addNotification('water'), waterTiming);
    const standInterval = setInterval(() => addNotification('stand'), standIntervalTime);

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
