import React from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

const EmojiPicker = ({ onSelect }) => (
  <Picker onSelect={onSelect} />
);

export default EmojiPicker;