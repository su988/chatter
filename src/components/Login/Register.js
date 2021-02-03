import React, { useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { signInWithGoogle } from '../../services/firebase';
import './Login.css';

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
  };

  currentUser && history.push('/');

  return (
    <div className='login'>
      <h2>signup</h2>
      {error && <div className='login_error'>{error}</div>}
      <form onSubmit={handleSubmit} className='login_form'>
        <input
          type='text'
          ref={emailRef}
          className='login_email'
          placeholder='Email'
        />
        <input
          type='password'
          ref={passwordRef}
          className='login_password'
          placeholder='Password'
        />
        <input
          type='password'
          ref={passwordConfirmRef}
          className='login_password'
          placeholder='Confirm Password'
        />
        <input type='submit' value='Submit' className='login_submit' />
      </form>

      <div className='login_google_text'>Or sign in with Google</div>

      <button onClick={signInWithGoogle} className='login_google_btn'>
        Google
      </button>

      <div className='login_register'>
        Already have an account? <Link to='/login'>Log In</Link>
      </div>
    </div>
  );
}
