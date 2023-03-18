import React from 'react'

export const InputForm = (props) => {

  return (
    <div>
        <input  
            name={props.name}
            type={props.type}
            autoComplete={props.autocomplete}
            placeholder={props.placeholder}/>
    </div>
  )
}
