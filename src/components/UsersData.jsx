import React from 'react'
import { useSelector } from 'react-redux'

export const UsersData = () => {
    const data = useSelector(state => state.addUser.data)
    let dataMap = data.map(arr => (<p key={arr.id}>{arr.firstName} {arr.lastName}</p>))
  return (
    <div>
      <h3>UsersData:</h3>
        {dataMap}
    </div>
  )
}
