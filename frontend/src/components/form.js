import React, { useRef } from 'react';
import axios from 'axios';
import './form.css'
import { Link,useNavigate } from 'react-router-dom';
const Post = () => {
    const em = useRef();
    const add = useRef();
    const age = useRef();
    const dep = useRef();
    const stat = useRef();
    const navigate = useNavigate()
    const submithandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/post", {
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
    return (
        <>
            <div className="srikor">
                <form onSubmit={submithandler}>
                    <label htmlFor="ename">Employee Name</label>
                    <input ref={em} className="srikooor" type="text" id="ename" name="ename" placeholder="Your name.." />

                    <label htmlFor="adress">Address</label>
                    <input ref={add} className="srikooor" type="text" id="address" name="address" placeholder="Your address.." />

                    <label htmlFor="age">Age</label>
                    <input ref={age} className="srikooor" type="number" id="age" name="age" />

                    <label htmlFor="depart">Department</label>
                    <input ref={dep} className="srikooor" type="text" id="depart" name="depart" placeholder="Your department.." />

                    <label htmlFor="country">Employee Status</label>
                    <select ref={stat} id="country" className="srikoor" name="country">
                    <option value="Remote Location">Remote Location</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Contract Employee">Contract Employee</option>
                    </select>
                
                    <input className="srikoooor" type="submit" value="Submit" />
                </form>
            </div>

        <button className="srikooooor" style={{color:'white', textDecoration:'none'}}
            onClick={() => {
                navigate('/dashboard')
            }}
        >All Posts</button>

        </>
    )
};

export default Post;