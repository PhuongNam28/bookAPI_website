import React from 'react'
import { useNavigate } from 'react-router-dom'
import './loginpage.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../lib/firebase'

function LoginPage() {
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { email, password } = Object.fromEntries(formData)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log('login success')
      navigate('/') // Redirect to HomePage
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='loginContainer'>
      <form action="" onSubmit={handleLogin}>
        <label htmlFor="">Enter User Email</label>
        <input className="userEmail" type="text" placeholder='enter user email' name='email' />
        <label htmlFor="">Enter User Password</label>
        <input className="userPassword" type="password" placeholder='enter user password' name='password' />
        <button className='loginButton'>Sign In</button>
      </form>
    </div>
  )
}

export default LoginPage
