import React from 'react';
import ConversationHistory from './ConversationHistory';
import MessageInput from './MessageInput';

const ChatWindow = () => (
  <div className="chat-window">
    <ConversationHistory />
    <MessageInput />
  </div>
);

export default ChatWindow;