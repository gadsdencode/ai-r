import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const RealTimeChat = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(YOUR_SOCKET_SERVER_URL, { query: { userId } });
    setSocket(newSocket);

    newSocket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => newSocket.disconnect();
  }, [userId]);

  const sendMessage = (message) => {
    socket.emit('sendMessage', { userId, message });
  };

  return (
    <ChatWindow messages={messages} onSendMessage={sendMessage} />
  );
};

export default RealTimeChat;