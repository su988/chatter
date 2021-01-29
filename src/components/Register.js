import React, { Fragment, useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { signInWithGoogle } from '../services/firebase';

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
    <>
      <h2>signup</h2>
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
        <label>
          Confirm Password
          <input type='password' ref={passwordConfirmRef} />
        </label>
        <input type='submit' value='Submit' />
      </form>
      <div>
        <button onClick={signInWithGoogle}>Google</button>
      </div>
      <div>
        Already have an account? <Link to='/login'>Log In</Link>
      </div>
    </>
  );
}
