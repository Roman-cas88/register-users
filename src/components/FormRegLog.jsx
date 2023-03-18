import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Login } from './Login'
import { NewUser } from './NewUser'
import './styles.css'

export const FormRegLog = () => {

    const [showLog, setShowLog] = useState(true)
    const [showReg, setShowReg] = useState(false)

    const showLogin = () => {
        setShowLog(true)
        setShowReg(false)
    } 
    const showRegist = () => {
        setShowReg(true)
        setShowLog(false)
    }
  return (
    <Container className='formReg'>
                <button className='switchButton' onClick={showLogin}>Log in</button>
                <button className='switchButton' onClick={showRegist}>Sign up</button>
        {showLog && <Login />}
        {showReg && <NewUser />}
    </Container>
  )
}
