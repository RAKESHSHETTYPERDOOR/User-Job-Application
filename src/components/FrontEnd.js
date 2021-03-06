import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'


const FrontEnd=(props)=>{
    const [frontend,setFronEnd]=useState([])
    const [shortlist,setShortList]=useState(false)
    const [details,setDetails]=useState({})
    const [modalIsopen,setModalIsopen]=useState(false)

   

    const customStyles = {
        content: {
          padding:"40px",  
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height:'10x',
          backgroundColor:'white',
          boxShadow:'0 0 10px 0',
        },
      };
   
    

    useEffect(()=>{

        axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
        .then((response)=>{
          const result= response.data

         const frontend= result.filter((ele)=>{
              return ele.jobTitle === "Front-End Developer"
          })
          setFronEnd(frontend)
          
        })
        .catch((err)=>{
           alert(err.message)
        })
    },[shortlist])




   const accepted=(id,e)=>{
       console.log(id)
       e.preventDefault()
       axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,
       {
           status:"shortlisted"
       }
       )
       .then((res)=>{
           console.log(res.data)
           setShortList(!shortlist)
        })
       .catch((err)=>{
           alert(err.message)
       })
    } 


   
    const rejected=(id,e)=>{
    console.log(id)
    e.preventDefault()
    axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,
    {
        status:"rejected"
    }
    )
    .then((res)=>{
        console.log(res.data)
        setShortList(!shortlist)
        

    })
    .catch((err)=>{
        alert(err.message)
    })
} 

   

   const viewdetails=(e,id)=>{
    e.preventDefault()
    console.log(id)
    axios.get(`http://dct-application-form.herokuapp.com/users/application-form/${id}`)
    .then((res)=>{
    const result= (res.data)
    const data={
    contact:result.phone,
    email:result.email,
    skills:result.skills,
    experience:result.experience
    }
    setDetails(data)
    setModalIsopen(true)

    console.log(data)
    })
    .catch((err)=>{
        alert(err.message)
    })
   }
  

   


    return(
      <div class="container">
          <button type="button" class="btn btn-light" style={{padding:'10px',marginLeft:'10px'}} ><Link to='/admin' >Back</Link></button>
         <h1 style={{padding:"10px"}}>Frond-End-Developer</h1>
         <p style={{padding:'10px'}}><b>List of-candidated applied for frond-end Jobs</b></p>

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
                {frontend.map((ele,i)=>{
                    return <tr key={i} class="table-light">
                          <td>{ele.name}</td>
                          <td>{ele.skills}</td>
                          <td>{ele.experience}</td>
                          <td>{ele.createdAt.slice(0,10).split('-').reverse().join('-')}</td>
                          <td><button onClick={(e)=>{viewdetails(e,ele._id)}}  type="button" class="btn btn-info" >VIEW Details</button></td>
                         
                          <td>
                              {
                                  ele.status === "shortlisted" &&
                                  <button type="button" class="btn btn-primary">Accept</button> ||
                                  ele.status === "rejected" &&
                                  <button type="button" class="btn btn-danger">Reject</button> ||
                                  ele.status === "applied" &&
                                  <div>
                                  <button  type="button" class="btn btn-primary"  onClick={(e)=>{accepted(ele._id,e)}} >Accept</button> 
                                  <button onClick={(e)=>{rejected(ele._id,e)}} type="button" class="btn btn-danger">Reject</button>
                                  </div>
                    
                              }
                          </td>

                          
                          
                    </tr>
                })}



             </tbody>
         </table>
         <div>
             <Modal isOpen={modalIsopen} style={customStyles}> 
             <h3 style={{padding:'2px'}}>Contact-{details.contact}</h3>
             <h3 style={{padding:'2px'}}>Email-{details.email}</h3>
             <h3 style={{padding:'2px'}}>Skills-{details.skills}</h3>
             <h3 style={{padding:'2px'}}>Experience-{details.experience}</h3> 
             <button onClick={()=>{(setModalIsopen(false))}} type="button" class="btn btn-danger" style={{padding:'2px'}}>Close</button>
         </Modal>
         </div>
         

      </div>

    )
}
export default FrontEnd