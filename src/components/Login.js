import React, { Fragment, useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { signInWithGoogle } from '../services/firebase';
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
  const { login, currentUser } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to login');
    }

    setLoading(false);
  };

  return (
    <>
      {currentUser && history.push('/')}
      <h2>Login</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type='text' ref={emailRef} />
        </label>
        <label>
          Password
          <input type='password' ref={passwordRef} />
        </label>
        <input type='submit' value='Submit' />
      </form>
      <div>
        <button onClick={signInWithGoogle}>Google</button>
      </div>
      <div>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </div>
    </>
  );
}
