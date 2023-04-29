import React from 'react'
import "./Topcards.css"
import { MdWallet } from "react-icons/md"
import { CgArrowTopLeftO } from "react-icons/cg"
import { AiOutlineLike } from "react-icons/ai"
import { FiUsers } from "react-icons/fi"

const Topcard = () => {
    return (
        <div className='Topcard-grid'>

            <div className="card1">
                <div className="crd1icon">
                    <MdWallet style={{ fontSize: "1.5rem" }} />
                </div>
                <div className="info">
                    <div className="ltr">
                        Total Revenues
                    </div>
                    <div className="num">
                        $2,129,430
                    </div>
                </div>
            </div>
            <div className="card1" style={{ background: "#F4ECDD" }}>
                <div className="crd1icon">
                    <CgArrowTopLeftO style={{ fontSize: "1.5rem" }} />
                </div>
                <div className="info">
                    <div className="ltr">
                        Total Transactions
                    </div>
                    <div className="num">
                        1,520
                    </div>
                </div>
            </div>
            <div className="card1" style={{ background: "#EFDADA" }}>
                <div className="crd1icon">
                    <AiOutlineLike style={{ fontSize: "1.5rem" }} />
                </div>
                <div className="info">
                    <div className="ltr">
                        Total Likes
                    </div>
                    <div className="num">
                        9,721
                    </div>
                </div>
            </div>
            <div className="card1" style={{ background: "#DEE0EF" }}>
                <div className="crd1icon">
                    <FiUsers style={{ fontSize: "1.5rem" }} />
                </div>
                <div className="info">
                    <div className="ltr">
                        Total Users
                    </div>
                    <div className="num">
                        822
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Topcard
