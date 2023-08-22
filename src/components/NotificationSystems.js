import React from 'react';

const NotificationSystem = ({ notifications }) => (
  <div className="notification-system">
    {notifications.map((notification, index) => (
      <div key={index} className="notification">
        {notification.message}
      </div>
    ))}
  </div>
);

export default NotificationSystem;