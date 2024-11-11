import React, { useState } from 'react'
import { Create } from './Create'

export const Tablhead = ( {item , setUserData}) => {
  console.log(item , "hgjhgjhgjhgjh");
  
    const [openModel, setOpenModel]=useState(false)

  return (
    <div >

        <div >
            <button onClick={()=>setOpenModel(true)}>
                Add User
                </button> 


        </div>

        

   {openModel && 

   
  
  
    <Create setUserData={setUserData} setOpenModel={setOpenModel}
    items={item}
   />}

  
    
    </div>
  )
}
