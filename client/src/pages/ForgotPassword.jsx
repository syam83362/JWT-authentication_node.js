import React, { useState } from 'react';
import { authAPI } from '../../api/apiAuth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authAPI.forgotPassword({ email });
      alert('Password reset email sent! Please check your inbox.');
    } catch (error) {
      alert('Failed to send password reset email. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Forgot Password</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send Reset Email</button>
    </form>
  );
};

export default ForgotPassword;