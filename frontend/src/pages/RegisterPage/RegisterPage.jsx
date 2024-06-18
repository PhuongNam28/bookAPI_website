import React from 'react'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { auth, db } from '../../lib/firebase'
import { setDoc,doc } from 'firebase/firestore'

function RegisterPage() {
    const handleRegister = async (e) => {
       e.preventDefault()
       const formData = new FormData(e.target)
       const {email,password} = Object.fromEntries(formData);
       

       try {
        const res = await createUserWithEmailAndPassword(auth,email,password)

        await setDoc(doc(db,"users",res.user.uid),{
            email,
            password,
            id: res.user.uid
        });
        
       } catch (err) {
        console.log(err)
       }
    }
    return (
        <div className='loginContainer'>
            <form action="" onSubmit={handleRegister}>
                <label htmlFor="">Enter User Email</label>
                    <input className="userEmail" type="text" placeholder='enter user email' name='email' />
                <label htmlFor="">Enter User Password</label>
                    <input className="userPassword" type="password" placeholder='enter user password' name='password' />
                <button className='loginButton'>Register</button>
            </form>
        </div>
      )
}

export default RegisterPage