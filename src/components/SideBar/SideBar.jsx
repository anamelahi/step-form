import React from 'react'
import "./SideBar.css"
import Steps from './Steps'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <Steps no="1" sname="Personal Information"/>
        <Steps no="2" sname="Address Information"/>
    </div>
  )
}

export default SideBar