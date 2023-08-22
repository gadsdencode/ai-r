import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  // ... existing code ...

  return (
    <div className="message-input" role="form" aria-labelledby="message-input">
      <label id="message-input-label" htmlFor="message-input">Type your message:</label>
      <input
        id="message-input"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        aria-describedby="message-input-label"
      />
      <button onClick={handleSend} aria-label="Send message">Send</button>
    </div>
  );
};

export default MessageInput;