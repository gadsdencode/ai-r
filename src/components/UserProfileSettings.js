import React, { useState } from 'react';

const UserProfileSettings = ({ user, onSave }) => {
  const [username, setUsername] = useState(user.username);
  const [theme, setTheme] = useState(user.theme);

  const handleSave = () => {
    onSave({ username, theme });
  };

  return (
    <div className="user-profile-settings">
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default UserProfileSettings;