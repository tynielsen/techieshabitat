import type { Notification } from '../types';

interface NotificationSystemProps {
  notifications: Notification[];
  onDismiss: (id: number) => void;
}

export function NotificationSystem({ notifications, onDismiss }: NotificationSystemProps) {
  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map(notification => (
        <div
          key={notification.id}
          onClick={() => onDismiss(notification.id)}
          className="bg-blue-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center cursor-pointer hover:bg-blue-600 transition-colors"
        >
          <span className="font-semibold">{notification.message}</span>
        </div>
      ))}
    </div>
  );
}
