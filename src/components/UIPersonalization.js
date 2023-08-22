import React from 'react';

const UIPersonalization = ({ settings, onSettingChange }) => (
  <div className="ui-personalization">
    <label>
      Layout:
      <select value={settings.layout} onChange={(e) => onSettingChange('layout', e.target.value)}>
        <option value="compact">Compact</option>
        <option value="cozy">Cozy</option>
      </select>
    </label>
    <label>
      Font Size:
      <input type="number" value={settings.fontSize} onChange={(e) => onSettingChange('fontSize', e.target.value)} />
    </label>
    {/* Additional customization options */}
  </div>
);

export default UIPersonalization;