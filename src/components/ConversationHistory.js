import React from 'react';

const ConversationHistory = ({ messages }) => (
  <div className="conversation-history">
    {messages.map((message, index) => (
      <div key={index} className={`message ${message.sender}`}>
        <span>{message.text}</span>
      </div>
    ))}
  </div>
);

export default ConversationHistory;