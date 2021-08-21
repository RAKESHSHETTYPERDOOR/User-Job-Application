import React, { useState } from 'react'
import axios from 'axios'
import validator from 'validator'


const JobForm=(props)=>{

  const [fullname,setfullName]=useState(' ')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [experiance,setExperiance]=useState('')
  const [job,setJob]=useState('')
  const [technicalskills,setTechnicalskills]=useState('')
  const [formerrors,setFormerrors]=useState({})


  const errors={}

  
const runValidation=()=>{
    if (fullname.trim().length===0){
        errors.fullname='name cannot be blank'
    } if(email.trim().length === 0){
        errors.email='email cannot be blank'
    }else if(!validator.isEmail(email)){
        errors.email='invalid email format'
    }
    if(phone.trim().length === 0){
        errors.phone='phone cannot be blank'
    }if(experiance.trim().length === 0){
        errors.job='job cannot be blank'
    }if(technicalskills.trim().length === 0){
        errors.skills='skills cannot be blank'
    }if(experiance.trim().length === 0){
        errors.experience='experience cannot be blank'
    }


    setFormerrors(errors)
}

  const handleSubmit=(e)=>{
      
    e.preventDefault()
    runValidation()


    const formdata={
        name:fullname,
        phone:phone,
        email:email,
        skills:technicalskills,
        jobTitle:job,
        experience:experiance
    }
    console.log(formdata)

    axios.post('http://dct-application-form.herokuapp.com/users/application-form',
    formdata
    )
    .then((response)=>{
    console.log(response.data)

    })
    .catch((err)=>{
    alert(err.message)
    
    })
    }

  const handlechange=(e)=>{
      e.preventDefault()
      if(e.target.name === 'fullname'){
          setfullName(e.target.value)
      }
      if(e.target.name === 'phone'){
        setPhone(e.target.value)
    }
    if(e.target.name ===  'email'){
        setEmail(e.target.value)
    }
    if(e.target.name === 'job'){
        setJob(e.target.value)
    }
    if(e.target.name === 'experiance'){
        setExperiance(e.target.value)
    } if(e.target.name === 'technical skills'){
        setTechnicalskills(e.target.value)
    }



}


const mystyle={
    
    marginLeft:'25%',
    padding:'40px',
    background:"white",
    paddingLeft:"190px",
    allignItems:'center',
    top:'50%',
    marginTop:"40px",
    marginBottom:"40px",
    marginRight:'200px',
    boxShadow:'0 0 10px 0'
       
}








    return(
       <div>
         <h1 style={{padding:"10px",marginLeft:'430px',marginRight:'360px',paddingLeft:"80px", background:'blue',color:'white'}}>Apply For The Job</h1>  
        <div class="container" >
            <div style={mystyle} >
             <div class="row">
              <div class="col-lg-9">
               <div>    
                 <form onSubmit={handleSubmit}  >
                   <div >
                    <div class="row">
                      <div class="col col-lg-9">
                       <label class="form-label"  >
                         <b>Fullname</b></label>
                            <input
                            class="form-control" 
                            type='text'
                            placeholder='enter the full name'
                            onChange={handlechange}
                            value={fullname}
                            name='fullname'
                            />  <span><b style={{padding:'1px',marginLeft:'3px',color:'red'}}>{formerrors.fullname}</b></span> <br/>
                            </div>  
                            </div> 
                            
                            <div class="row">
                            <div class="col col-lg-9"> 
                            <label class="form-label" >
                            <b> Email address</b> </label>
                            
                            <input
                            class="form-control"
                        
                            type='text'
                            placeholder='example@gmail.com'
                            onChange={handlechange}
                            value={email}
                            name='email'
                            /> <span><b style={{padding:'1px',marginLeft:'3px',color:'red'}}>{formerrors.email}</b></span> <br/> <br/>
                            </div>
                            </div>
                        
                            <div class="row">
                            <div class="col col-lg-9"> 
                            <label class="form-label" for="exampleFormControlInput1"><b>Contact number</b></label>
                            <input
                            class="form-control"
                            type='text'
                            placeholder='9882828282'
                            onChange={handlechange}
                            value={phone}
                            name='phone'
                            /> <span><b style={{padding:'1px',marginLeft:'3px',color:'red'}}>{formerrors.phone}</b></span> <br/>
                            </div>
                            </div>

                            <div class="row">
                            <div class="col col-lg-9"> 
                            <label for="exampleFormControlInput1" class="form-label"><b>Applying for job</b></label>
                            <select onChange={handlechange} name='job' class="form-select" aria-label="Default select example">
                            <option>select</option>
                            <option value='Front-End Developer'>Frond-End Developer</option>
                            <option value='Node-js-devloper'>Node-js-developer</option>
                            <option value='MERN Stack developer'>MERN Stack developer</option>
                            <option value='Full stack developer'>Full stack developer</option>
                            </select><span><b style={{padding:'1px',marginLeft:'3px',color:'red'}}>{formerrors.job}</b></span>  <br/>
                            </div>
                            </div>

                            <div class="row">
                            <div class="col col-lg-9"> 
                            <label class="form-label"><b>Experiance</b></label>
                            <input
                            class="form-control"
                            type='text'
                            placeholder='Experiance(2years 3 months)'
                            value={experiance}
                            onChange={handlechange}
                            name='experiance'
                            /> <span><b style={{padding:'1px',marginLeft:'3px',color:'red'}}>{formerrors.experience}</b></span> <br/>
                            </div>
                            </div>

                            <div class="row">
                            <div class="col col-lg-9"> 
                            <label class="form-label"><b>Technical skills</b></label>
                            <textarea
                            class="form-control"
                            onChange={handlechange}
                            value={technicalskills}
                            name='technical skills'
                            placeholder='technical skills'
                            >
                            
                            </textarea> <span><b style={{padding:'1px',marginLeft:'3px',color:'red'}}>{formerrors.skills}</b></span><br/>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col col-lg-9"> 
                            <input
                            type='submit'
                            class="btn btn-primary" type="submit"
                            />
                           </div>
                          </div>
                        </div>
                     </form>
                   </div>
                 </div>
              </div>
             </div>
         </div>   
         </div>
        )
    }
                            
                            



export default JobForm