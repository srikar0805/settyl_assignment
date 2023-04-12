import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Update = () => {

    const [userdata,setuserdata] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/update/${id}`)
        .then((res) => {
            console.log(res.data);
            setuserdata(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const em = useRef();
    const add = useRef();
    const age = useRef();
    const dep = useRef();
    const stat = useRef();
    const { id } = useParams();
    const submithandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/update/${id}`, {
            Employee_name: em.current.value,
            Address: add.current.value,
            Age: age.current.value,
            Department: dep.current.value,
            Employee_status: stat.current.value
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
    }

    const handlechanger = (e) => {
        setuserdata({...userdata, [e.target.name]: e.target.value})
    }


    return (
        <>
            <div className="srikor">
                <form onSubmit={submithandler}>
                    <label htmlFor="ename">Employee Name</label>
                    <input ref={em} className="srikooor" type="text" id="ename" name="Employee_name" placeholder="Your name.." value={userdata.Employee_name} onChange={handlechanger}/>

                    <label htmlFor="adress">Address</label>
                    <input ref={add} className="srikooor" type="text" id="address" name="Address" placeholder="Your address.." value={userdata.Address} onChange={handlechanger}/>

                    <label htmlFor="age">Age</label>
                    <input ref={age} className="srikooor" type="number" id="age" name="Age" value={userdata.Age} onChange={handlechanger}/>

                    <label htmlFor="depart">Department</label>
                    <input ref={dep} className="srikooor" type="text" id="depart" name="Department" placeholder="Your department.." value={userdata.Department} onChange={handlechanger}/>

                    <label htmlFor="country">Employee Status</label>
                    <select ref={stat} id="country" className="srikoor" name="Employee_status" value={userdata.Employee_status} onChange={handlechanger}>
                    <option value="Remote Location">Remote Location</option>
                    <option value="Full-time">Full-Time</option>
                    <option value="Contract Employee">Contract Employee</option>
                    </select>
                
                    <input className="srikoooor" type="submit" value="Submit" />
                </form>
            </div>
        </>
    )

}
export default Update;