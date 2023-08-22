import React from 'react';

const ReadReceipt = ({ isRead }) => (
  <div className="read-receipt">
    {isRead ? 'Read' : 'Delivered'}
  </div>
);

export default ReadReceipt;