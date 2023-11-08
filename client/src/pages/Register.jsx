import React from 'react'

const Register = () => {
  return (
    <div className='auth'>
    <h1>Register</h1>
    <form>
      <input required type="text" placeholder='username' />
      <input required type="email" placeholder='email' />
      <input required type='password' placeholder='password' />
      <button>Login</button>
      <p>There has been an Error</p>
      <span>have an account? <a href="/login">Login</a></span>
    </form>
  </div>
  )
}

export default Register