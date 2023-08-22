import React, { useRef } from 'react';
import SpeechRecognition from 'react-speech-recognition';

const VoiceInput = ({ onVoiceMessage }) => {
  const recognition = useRef(SpeechRecognition.getRecognition());

  const handleStart = () => {
    recognition.current.start();
  };

  const handleStop = () => {
    recognition.current.stop();
    onVoiceMessage(SpeechRecognition.getFinalResult());
  };

  return (
    <div className="voice-input">
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default VoiceInput;