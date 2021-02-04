import React, { useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { signInWithGoogle } from '../../services/firebase';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const { login, currentUser } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Credentials do not match');
    }
  };

  currentUser && history.push('/');

  return (
    <div className='login'>
      <h2>Login</h2>
      {error && <div className='login_error'>{error}</div>}
      <form onSubmit={handleSubmit} className='login_form'>
        <input
          type='text'
          ref={emailRef}
          className='login_email'
          placeholder='john@mail.com'
        />
        <input
          type='password'
          ref={passwordRef}
          className='login_password'
          placeholder='password'
        />
        <input className='login_submit' type='submit' value='Submit' />
      </form>

      <div className='login_google_text'>Or sign in with Google</div>

      <button onClick={signInWithGoogle} className='login_google_btn'>
        Google
      </button>

      <div className='login_register'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </div>
    </div>
  );
}
