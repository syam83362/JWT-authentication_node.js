import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { authAPI } from '../../api/apiAuth';

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('Verifying your email...');

  useEffect(() => {
    const verify = async () => {
      try {
        await authAPI.verifyEmail(token);
        setMessage('Email verified successfully! You can now log in.');
        setTimeout(() => navigate('/login'), 3000);
      } catch (error) {
        setMessage('Verification failed. The token may be invalid or expired.');
      }
    };

    verify();
  }, [token, navigate]);

  return <p>{message}</p>;
};

export default VerifyEmail;