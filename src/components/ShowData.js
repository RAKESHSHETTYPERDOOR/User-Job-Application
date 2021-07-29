
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'



const ShowData=(props)=>{
  const {data}=props
  console.log('show',data)




    return (
        <div>

<table border="1" class="table table-striped  table-bordered"  >
             <thead >
                <tr class="table-light">
                    <th scope="col">Name</th>
                    <th scope="col">Technical Skills</th>
                    <th scope="col">Experience</th>
                    <th scope="col">Applied Date</th>
                    <th scope="col">View Details</th>
                    <th scope="col">Update Application status</th>
                </tr>

             </thead>

             <tbody>
                {data.map((ele,i)=>{
                    return <tr key={i} class="table-light">
                          <td>{ele.name}</td>
                          <td>{ele.skills}</td>
                          <td>{ele.experience}</td>
                          <td>{ele.createdAt.slice(0,10).split('-').reverse().join('-')}</td>
                          <td><button   type="button" class="btn btn-info" >VIEW Details</button></td>
                         
                          <td>
                              {
                                  ele.status === "shortlisted" &&
                                  <button type="button" class="btn btn-primary">Accept</button> ||
                                  ele.status === "rejected" &&
                                  <button type="button" class="btn btn-danger">Reject</button> ||
                                  ele.status === "applied" &&
                                  <div>
                                  <button  type="button" class="btn btn-primary"   >Accept</button> 
                                  <button  type="button" class="btn btn-danger">Reject</button>
                                  </div>
                    
                              }
                          </td>

                          
                          
                    </tr>
                })}



             </tbody>
         </table>



        </div>
    )
}
export default ShowData