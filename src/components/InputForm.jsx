import React from 'react'

export const InputForm = (props) => {
    const styles = {
        input: {
            marginBottom: '20px',
            padding: '10px 5px'
        }
    }
  return (
    <div>
        <input  
            style={styles.input}
            name={props.name}
            type={props.type}
            autoComplete={props.autocomplete}
            placeholder={props.placeholder}/>
    </div>
  )
}
