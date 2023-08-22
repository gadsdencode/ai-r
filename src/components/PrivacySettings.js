import React from 'react';

const PrivacySettings = ({ privacyOptions, onPrivacyChange }) => (
  <div className="privacy-settings">
    {privacyOptions.map((option) => (
      <label key={option.name}>
        <input
          type="checkbox"
          checked={option.enabled}
          onChange={() => onPrivacyChange(option.name)}
        />
        {option.label}
      </label>
    ))}
  </div>
);

export default PrivacySettings;