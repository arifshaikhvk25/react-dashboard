import React from 'react'
import "./Piechart.css"
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)


const Piechart = () => {

    const data = {
        labels: ["One", "Two", "Three"],
        datasets: [
            {
                data: [55, 31, 14],
                backgroundColor: [ "#98D89E"," #F7DC7D","#EE8484",]
            }
        ]
    };

    const options = {}

    return (
        <div className='piechart'>
            {/* <div className="products"> */}

            <div className="containerpie">

                <div className="prdtcharts">
                    <h2 className='pieh1'>Top Products</h2>

                    <Pie data={data} options={options} style={{ width: "200px", height: "150px" }} ></Pie>
                </div>

                <div className="prdtdetail" >

                    <div className="ctnrflex">

                        <div className="emptprdt"></div>
                        <div className="prdtdtls">
                            <p style={{ fontWeight: "900" }}>Basic Tees</p>
                            <p>55%</p>
                        </div>
                    </div>
                    <div className="ctnrflex">

                        <div className="emptprdt" style={{background: "#F6DC7D"}}></div>
                        <div className="prdtdtls">
                            <p style={{ fontWeight: "900" }}>Custom Short Pants</p>
                            <p>31%</p>
                        </div>
                    </div>
                    <div className="ctnrflex">

                        <div className="emptprdt" style={{background: "#EE8484"}}></div>
                        <div className="prdtdtls">
                            <p style={{ fontWeight: "900" }}>Super Hoodies</p>
                            <p>14%</p>
                        </div>
                    </div>


                </div>

            </div>

            {/* </div> */}

            <div className="schedules">
                <div className="scdltag">Today’s schedule</div>
                <div className="meeting">
                    <div className="emptscdle"></div>
                    <div className="scdldtls">
                        <p className='sdlp1'>Meeting with suppliers from Kuta Bali</p>
                        <p style={{fontSize:"12px", fontWeight:"400"}}>14.00-15.00</p>
                        <p style={{fontSize:"12px", fontWeight:"400"}}>at Sunset Road, Kuta, Bali </p>
                    </div>
                </div>
                <div className="meeting">
                    <div className="emptscdle" style={{border:"5px solid #6972C4"}}></div>
                    <div className="scdldtls">
                        <p className='sdlp1'>Check operation at Giga Factory 1</p>
                        <p style={{fontSize:"12px", fontWeight:"400"}}>18.00-20.00</p>
                        <p style={{fontSize:"12px", fontWeight:"400"}}>at Central Jakarta  </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Piechart
