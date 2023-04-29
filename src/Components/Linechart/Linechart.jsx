import React from 'react'
import "./Linechart.css"
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement
)

const Linechart = () => {

    const [data, setData] = useState({
        labels: ["week1", "week2", "week3", "week4"],
        datasets: [
            {
                label: "Activities",
                data: [200, 100, 300, 100, 450],
                borderColor: '#45d764',
                tension: 0.4,
            },
            {
                label: "Activities",
                data: [0, 300, 100, 250, 400],
                borderColor: '#d33939',
                tension: 0.4,
            }
        ]
    })

    const options ={}


    return (
        <div className="linchartgrid" style={{}}>
            <div className="linechart">
                <Line data={data} style={{ width:"950px", background: "#FFFFFF", borderRadius:"20px", margin:"0 2rem", }} options={options} ></Line>
            </div>
        </div>
    );

}

export default Linechart





