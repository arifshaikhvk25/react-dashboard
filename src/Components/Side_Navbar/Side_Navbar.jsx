import React from 'react'
import {TbDashboard} from "react-icons/tb"
import {CgArrowTopLeftO} from "react-icons/cg"
import {AiOutlineSchedule, AiFillSetting} from "react-icons/ai"
import {BiUserCircle} from "react-icons/bi"

import "./Side_Navbar.css"

const Side_Navbar = () => {
    return (
        <div className='sidenav'>
            <h2 className='sidenavH1'> Board. </h2>
            <div className="boardLi" style={{fontWeight:"700"}}>
               <TbDashboard/> Dashboard
            </div>
            <div className="boardLi">
               <CgArrowTopLeftO/> Transactions
            </div>
            <div className="boardLi">
               <AiOutlineSchedule/> Schedules
            </div>
            <div className="boardLi">
               <BiUserCircle/> Users
            </div>
            <div className="boardLi">
               <AiFillSetting/> Settings
            </div>

            <div className="hlpCont">
                <p style={{padding:"1rem"}} >Help</p>
                <p style={{padding:"1rem"}} >Contact</p>
            </div>
        </div>
    )
}

export default Side_Navbar
