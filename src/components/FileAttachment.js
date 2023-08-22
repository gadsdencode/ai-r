import React from 'react';

const FileAttachment = ({ onAttach }) => (
  <div className="file-attachment">
    <input type="file" onChange={onAttach} />
  </div>
);

export default FileAttachment;