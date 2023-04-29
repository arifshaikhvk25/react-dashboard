import React from 'react'
import "./Nav.css"
import { CiSearch } from "react-icons/ci"
import { BsBell } from "react-icons/bs"

const Nav = () => {
    return (
        <div className='Nav'>

            <div className="navH1">
                <h2>Dashboard</h2>
            </div>

            <div className="navpt2">

                <div className="navinput" style={{margin:"0 1rem", background:"#FFFFFF", borderRadius: "10px",padding:"0 8px"}}>
                    <input type="search" name="search" id="" placeholder='Search...' />
                    <CiSearch style={{cursor:"pointer"}} />
                </div>

                <div className="bell">
                    <BsBell style={{fontSize:"18px", margin:"0 1rem"}} />
                </div>

                <div className="img">
                    <img src="./logo192.png" alt="" style={{ width: "28px", margin:"0 1rem" }} />
                </div>

            </div>

        </div>
    )
}

export default Nav
