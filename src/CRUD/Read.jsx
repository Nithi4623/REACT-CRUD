import React, { useState } from 'react'
import { Create } from './Create'
import { Tablhead } from './Tablhead'

export const Read = () => {
     const [userData ,setUserData]=useState([])
   
      
  return (
    <div>




    

     {/* {openModel &&  
      } */}
        
<div>
    <Tablhead setUserData={setUserData}/>
</div>

  {userData.map((item )=>{
    return(
        <div style={{ border : "2px solid black" , width :'400px' , display :'flex' , justifyContent :'center' , position :'relative' , left :'500px'}}>

                {item.name}

         {item.age}
         </div>
       
      

      
    )
    



  })}


</div>


 
  )
}
