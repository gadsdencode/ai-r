import React, { useEffect } from 'react';

const TypingIndicator = ({ socket, isTyping }) => {
  useEffect(() => {
    socket.emit('typing', isTyping);
  }, [isTyping, socket]);

  return (
    <div className="typing-indicator">
      {isTyping ? 'Typing...' : ''}
    </div>
  );
};

export default TypingIndicator;