import React from 'react'
import { useSelector } from 'react-redux'

export const UsersData = () => {
    const data = useSelector(state => state.addUser.data)
    let dataMap = data.map(arr => (<p key={arr.lastName}>{arr.firstName} {arr.lastName}</p>))
  return (
    <div>
        UsersData:
        {dataMap}
    </div>
  )
}
