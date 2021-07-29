import React, { useState,useEffect } from 'react'
import { Link,Route } from 'react-router-dom'
import axios from 'axios'
import ShowData from './ShowData'


const Admin=(props)=>{




    const [name,setName]=useState("")
    const [data,setData]=useState([])


    useEffect(()=>{

        axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
        .then((response)=>{
        const result= response.data
        console.log(result)
        const frontend= result.filter((ele)=>{
        return ele.jobTitle === name
        })
        setData(frontend)
    })
    .catch((err)=>{
        alert(err.message)
          
        })
    },[name])
  
    const title=[
    
    
        {"name":"Front-End Developer","route":'front-end'},
        {"name":"Node.js Developer","route":"node"},
        {"name":"MEAN Stack Developer","route":"mern"},
        {"name":"FULL Stack Developer","route":"Full-Stack"}
    
    ]


    const Details=(e,name)=>{ 
        setName(name)
         axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
        .then((response)=>{
         const result= response.data
          
         const frontend= result.filter((ele)=>{
              return ele.jobTitle === name
          })
          setData(data)
          
        })
        .catch((err)=>{
           alert(err.message)
        })
    }

   
    
    


    return(


        <div>
            <ul class="list-group"> 
                <li  class="list-group-item active" aria-current="true">Admin-Dashboard</li>
                
                {title.map((ele)=>{
                   return <li  class="list-group-item" onClick={(e)=>{Details(e,ele.name)}}> <Link to={`/${ele.route}`}>{ele.name}</Link></li> 

                })

                }
                 
            </ul>
            {/* <ShowData
            data={data}
            /> */}
        </div>
   
   )
}
export default Admin