import React, { useState,useEffect } from 'react'
import { Link,Route } from 'react-router-dom'
import axios from 'axios'



const Admin=(props)=>  {
    const [name,setName] = useState([])   
    const details=(name, e) => {
        console.log(name)
        e.preventDefault()

    }
    const title=[
    
        {"name":"Front-End Developer","route":'front-end'},
        {"name":"Node.js Developer","route":"node"},
        {"name":"MEAN Stack Developer","route":"mern"},
        {"name":"FULL Stack Developer","route":"Full-Stack"}
    
    ]
    
    return(
        <div>
            <ul class="list-group"> 
                <li  class="list-group-item active" aria-current="true">Admin-DashBoard</li>
                
                {title.map((ele)=>{
                   return <li  class="list-group-item" onClick={(e)=>{details(ele.name,e)}} > <Link to={`/${ele.route}`}>{ele.name}</Link></li> 

                })

                }
                 
            </ul>      
        </div>
   
   )
}
export default Admin