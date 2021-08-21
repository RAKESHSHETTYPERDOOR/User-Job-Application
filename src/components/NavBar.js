import React from 'react'
import { Link,Route} from 'react-router-dom'
import Admin from './Admin'
import JobForm from './JobForm'
import Home from './Home'
import FrontEnd from './FrontEnd'
import MernStack from './MernStack'
import NodeJs from './NodeJs'
import FullStack from './FullStack'
import ShowData from './ShowData'

const NavBar=(props)=>{
    const {admin}=props

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar- bg-light"  >
             <div class="container-fluid" >  
             <h1 > <Link to='/home' class="navbar-brand" style={{color:'blue' ,padding:'20px',fontSize:'50px'}}>Home</Link> <br/>  </h1>
             <h1><Link to='/applyjob' class="navbar-brand" style={{color:'blue',padding:'20px',fontSize:'30px'}}>Apply For A Job</Link> <br/>  </h1>
              <h1><Link to='/admin' class="navbar-brand" style={{color:'blue',padding:'20px',fontSize:'30px'}} >Admin</Link> <br/>  </h1>
              </div> 
            </nav>

            <Route path='/applyjob' component={JobForm} exact={true}></Route>
            <Route path='/admin'  component={Admin} exact={true}></Route>
            <Route path='/back'  component={Admin} exact={true}></Route>
            <Route path='/home' component={Home} exact={true}></Route>
            
            <Route path='/front-end' render={(props)=>{
                
               return <FrontEnd/>
           }
           }
            ></Route>
            
            <Route path='/node' render={(props)=>{
               return <NodeJs/>
           }
           }
            ></Route>


          <Route path='/mern' render={(props)=>{
               return <MernStack/>
           }
           }
            ></Route>

            <Route path='/Full-stack' render={(props)=>{
               return <FullStack/>
           }
           }
            ></Route>


          
           

           
           
            
            
                       


            
    



        </div>
    )
}
export default NavBar