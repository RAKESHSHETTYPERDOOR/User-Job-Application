import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [form,seTform]=useState([])
  console.log(form)

   const handlesubmit=(e)=>{
        e.preventDefault()
      
   }


   const handleclick=(e)=>{

    
     const inputstate={
       platform:'',
       username:''
     }
     seTform([...form,inputstate])
   }

  //  const handlechange=(i,e)=>{
  //    e.preventDefault()
    
  //    seTform(
  //      form.map((ele,ind)=>{
  //        if (ind !== i){
  //          return ele
           
  //        }
  //        return {
  //          ...ele ,[e.target.name]:e.target.value,
  //        }
  //      })
  //    )







  //  }

  return (
    <div className="App">

      
      
       
       <form onSubmit={handlesubmit}>
       {
        form.map((ele,i)=>{
          return(
            <input
            type='text'
            placeholder='platform'
           
            name='platform'
            />
          )
        })
      }
   



       
       <button onClick={handleclick}>add form</button>

       <input
       type='submit'
       value='submit'
       />

       </form>



      
    </div>
  );
}

export default App;

dynamic array

/*

mport logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const [phone,setPhone]=useState([])
  

  const handleclick=(e)=>{
    e.preventDefault()
    const addphone={
      newphone:''
    }
    setPhone([...phone , addphone])

  }


  const handlechange=(e)=>{
       e.preventDefault()
       if (e.target.name==='name'){
         setName(e.target.value)
       }
       if(e.target.name === 'age'){
         setAge(e.target.value)
       }
  }

  const handlesubmit=(e)=>{
    e.preventDefault()
  }

  const handleremove=(ind,e)=>{
    e.preventDefault()
    setPhone(phone.filter((ele,i)=>{
      return i != ind
    }))


  }



  return(
     <div>
        <form onSubmit={handlesubmit}>
         <input
         type='text'
         placeholder='name'
         name='name'
         onChange={handlechange}
         />    
          <input
         type='text'
         placeholder='age'
         name='age'
         onChange={handlechange}
         />    
         {

           phone.map((ele,i)=>{
             return(
              <div>
              <input
              type='text'
              placeholder='add another phone'
              
              />
              <button onClick={(e)=>handleremove(i,e)}>Cancel</button>  <br/>
              
              </div>
             
             )
           })
         }
         <br/>
         
      
         <button onClick={handleclick}>addPone</button>
         
         <input
         type='submit'
         
         />



        </form>






      
    </div>
  );
}

export default App;

*/

