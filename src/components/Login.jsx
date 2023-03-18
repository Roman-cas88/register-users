import React from 'react'
import { InputForm } from './InputForm'

export const Login = () => {
    const submit = () => {

    }
  return (
    <div className='login'>
        <h3>Log in:</h3>
        <form onSubmit={submit}>
            <InputForm 
                type="email" 
                name="email" 
                placeholder="Email"
            />
            <InputForm 
                type="password" 
                name="password" 
                placeholder="Password"
            />
            <button className='submitButton' type='submit'>Login</button>
        </form>
        
    </div>
  )
}
