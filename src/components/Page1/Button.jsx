import React from 'react'
import "./Personal Details.css"

const Button = (props) => {
  return (
    <button type='submit' className='btn'>{props.btntext}</button>
  )
}

export default Button