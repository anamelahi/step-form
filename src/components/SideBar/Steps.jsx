import React from 'react'
import "./SideBar.css"

const Steps = (props) => {
  return (
    <div className='steps'>
        <div className="step-name">
        <h2>Step {props.no}</h2>
        <p>{props.sname}</p>
        </div>
        {/* <div className="circle">

        </div> */}
        
    </div>
  )
}

export default Steps