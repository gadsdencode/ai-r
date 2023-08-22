import React from 'react';

const ExportTranscript = ({ messages }) => {
  const handleExport = () => {
    const transcript = messages.map(msg => `${msg.sender}: ${msg.text}`).join('\n');
    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transcript.txt';
    a.click();
  };

  return (
    <button onClick={handleExport}>Export Transcript</button>
  );
};

export default ExportTranscript;