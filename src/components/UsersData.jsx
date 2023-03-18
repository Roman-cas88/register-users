import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export const UsersData = () => {
    const data = useSelector(state => state.addUser.data)
    let dataMap = data.map(arr => (<p key={arr.lastName}>{arr.firstName} {arr.lastName}</p>))
  return (
    <div>
      <h3>UsersData:</h3>
        {dataMap}
    </div>
  )
}
