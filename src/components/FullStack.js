import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'


const FullStack=(props)=>{
    const [fullStack,setFullstack]=useState([])
    const [shortlist,setShortList]=useState(false)
    const [details,setDetails]=useState({})
    const [modalIsopen,setModalIsopen]=useState(false)

    

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          boxShadow:"0 0 10px 0"
        }
      };
   
    

    useEffect(()=>{

        axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
        .then((response)=>{
          const result= response.data
          //console.log(result)
         const fullstak= result.filter((ele)=>{
              return ele.jobTitle === "FULL Stack Developer"
          })
          setFullstack(fullstak)
          
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
        setModalIsopen()

        console.log(data)
    })
    .catch((err)=>{
        alert(err.message)
    })
   }
  

   


    return(
      <div class="container">
           <button type="button" class="btn btn-light" style={{padding:'10px',marginLeft:'10px'}}><Link to='/admin'>Back</Link></button>
           <h1 style={{padding:"10px"}}>FULL-Stack Developer</h1>
           <h4 style={{padding:"10px"}}>List of-candidated applied for FULL-stack Jobs</h4>

         <table border="1px solid-black" class="table table-striped  table-bordered"   >
             <thead  border="1px solid-black">
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
                {fullStack.map((ele,i)=>{
                    return <tr key={i} class="table-light">
                          <td>{ele.name}</td>
                          <td>{ele.skills}</td>
                          <td>{ele.experience}</td>
                          <td>{ele.createdAt.slice(0,10).split('-').reverse().join('-')}</td>
                          <td><button onClick={(e)=>{viewdetails(e,ele._id)}} type="button" class="btn btn-info" >VIEW Details</button></td>
                         
                          <td>
                              {
                                  ele.status === "shortlisted" &&
                                  <button type="button" class="btn btn-primary">Accept</button> ||
                                  ele.status === "rejected" &&
                                  <button type="button" class="btn btn-danger">Reject</button> ||
                                  ele.status === "applied" &&
                                  <div>
                                  <button onClick={(e)=>{accepted(ele._id,e)}} type="button" class="btn btn-primary" >Accept</button> 
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
           <h3>Conact-{details.contact}</h3>
            <h3>Emial-{details.email}</h3>
            <h3>Skills-{details.skills}</h3>
            <h3>Experience-{details.experience}</h3> 
            <button onClick={()=>{(setModalIsopen(false))}} type="button" class="btn btn-danger">Close</button>
         </Modal>
         </div>
     </div>

    )
}
export default FullStack