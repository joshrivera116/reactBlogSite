
import React from 'react';
import '../style.scss';

export const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username' />
        <input type='password' placeholder='password' />
        <button>Login</button>
        <p>There has been an Error</p>
        <span>Don't have an account? <a href="/register">Register</a></span>
      </form>
    </div>
  )
}

export default Login