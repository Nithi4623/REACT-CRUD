import React, { useState } from 'react'
import { Create } from './Create'
import { Tablhead } from './Tablhead'

export const Read = () => {
     const [userData ,setUserData]=useState([])
     const [update,setupdata]=useState({})
     console.log(userData,"kgjhg");
     
   
      
  return (
    <div>




    

     {/* {openModel &&  
      } */}
        
<div>
    <Tablhead setUserData={setUserData} item={update}
    
    />
</div>

  {userData.map((item )=>{
    return(
        <div style={{ border : "2px solid black" , width :'400px' , display :'flex' , justifyContent :'center' , position :'relative' , left :'500px'}}>

                {item.name}

         {item.age}
         <button onClick={()=>{setupdata(item)}}>update</button>
         </div>
       
      

      
    )
    



  })}


</div>


 
  )
}
