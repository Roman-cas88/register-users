import React, { useState } from 'react'

export const InputForm = (props) => {
  const [focus, setFocus] = useState(false)

  const handleFocus = () => {
    setFocus(true)
  }

  return (
    <div>
      <label>{props.label}</label>
        <input  
            name={props.name}
            type={props.type}
            autoComplete={props.autocomplete}
            placeholder={props.placeholder}
            required
            pattern={props.pattern}
            id={props.id}
            onClick={props.onClick}
            onBlur={handleFocus}
            focus={focus.toString()}
          />
          <p className='errMessage'>{props.errMessage}</p>
    </div>
  )
}
