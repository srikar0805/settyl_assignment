import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from './modal'
import PieChart from './PieChart';
import { CategoryScale } from 'chart.js';
import Chart from "chart.js/auto";
import { useNavigate } from 'react-router-dom';

Chart.register(CategoryScale);

const Dashboard = () => {

    const navigate = useNavigate()

    

    const [data,setdata] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/allposts")
        .then((res) => {
            console.log(res.data);
            setdata(res.data)
            setChartData({
                labels: res.data.map((item) => item.Age),
                datasets: [
                    {
                        label: "Age",
                        data: res.data.map((item) => item.Age),
                        backgroundColor: [
                            "rgba(75,192,192,1)",
                    // &quot;#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"],
                    borderColor:
                        "rgba(75,192,192,1)",
                    borderWidth: 1,
                    },
                ]
            })
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const [chartData,setChartData] = useState({
        labels: data.map((item) => item.Age),
        datasets: [
            {
                label: "Age",
                data: data.map((item) => item.Age),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    // &quot;#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"],
                borderColor: 
                    "rgba(75,192,192,1)",
                borderWidth: 1,
            },
        ]


    });

    return (
        <>
            <PieChart chartData={chartData}/>
            <br/>
            <h1>Dashboard</h1>
            <br/>

            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Serial No</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Age</th>
                    <th scope="col">Department</th>
                    <th scope="col">Employee Status</th>
                    <th scope="col">Update</th>
                    <th scope='col'>View in model</th>
                    </tr>
                </thead>
                {data.map((item,index) => {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{item.Employee_name}</td>
                                <td>{item.Address}</td>
                                <td>{item.Age}</td>
                                <td>{item.Department}</td>
                                <td>{item.Employee_status}</td>
                                <td><Link to={`/update/${item._id}`} >Update</Link></td>
                                
                                <td>
                                <Modal id={item} index={index}/>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#exampleModal"+index}>View in modal</button></td>
                                <td></td>
                            </tr>
                        </tbody>
                    )
                })
                }
            </table>
            <button className="srikooooor" style={{color:'white', textDecoration:'none'}}
            onClick={() => {
                navigate('/')
            }}
        >form</button>

        </>
    )
}

export default Dashboard;
