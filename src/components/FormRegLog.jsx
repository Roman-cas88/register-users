import React, { useState } from 'react'
import { Login } from './Login'
import { NewUser } from './NewUser'
import './styles.css'

export const FormRegLog = () => {

    const [showLog, setShowLog] = useState(false)
    const [showReg, setShowReg] = useState(true)

    const showLogin = () => {
        setShowLog(true)
        setShowReg(false)
    } 
    const showRegist = () => {
        setShowReg(true)
        setShowLog(false)
    }
  return (
    <div className='formReg'>
        <div>
          <button className='switchButton' id='logButton' onClick={showLogin}>Log in</button>
          <button className='switchButton' id='regButton' onClick={showRegist}>Sign up</button>
        </div>
        {showLog && <Login />}
        {showReg && <NewUser />}
    </div>
  )
}
