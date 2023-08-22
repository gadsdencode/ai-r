import React, { useState } from 'react';
import { supabase } from './supabaseClient';

const Authentication = ({ onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async () => {
    const { user, error } = isLogin
      ? await supabase.auth.signIn({ email, password })
      : await supabase.auth.signUp({ email, password });

    if (error) {
      alert(error.message);
    } else if (user) {
      onAuthSuccess(user);
    }
  };

  return (
    <div className="authentication">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleAuth}>{isLogin ? 'Login' : 'Sign Up'}</button>
      <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Switch to Sign Up' : 'Switch to Login'}</button>
    </div>
  );
};

export default Authentication;