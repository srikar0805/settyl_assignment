import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios'
// import { useParams } from 'react-router-dom'

const modal = (Props) => {

    // useEffect(() => {
    //     axios.get(`http://localhost:8000/update/${id}`)
    //     .then((res) => {
    //         console.log(res.data);
    //         setuserdata(res.data)
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }, [])

    // const em = useRef();
    // const add = useRef();
    // const age = useRef();
    // const dep = useRef();
    // const stat = useRef();
    // const { id } = useParams();


    return (
        <>
            <div className="modal fade" id={"exampleModal"+Props.index} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Employee Data</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>
                                <tr>
                                {/* <th scope="col">Serial No</th> */}
                                <th scope="col">Employee Name</th>
                                {/* <th scope="col">Address</th> */}
                                <th scope="col">Age</th>
                                <th scope="col">Department</th>
                                <th scope="col">Employee Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <th scope="row">{index+1}</th> */}
                                    <td>{Props.id.Employee_name}</td>
                                    {/* <td>{Props.id.Address}</td> */}
                                    <td>{Props.id.Age}</td>
                                    <td>{Props.id.Department}</td>
                                    <td>{Props.id.Employee_status}</td>
                                </tr>
                            </tbody>

                           


                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
      </>
    )
}

export default modal