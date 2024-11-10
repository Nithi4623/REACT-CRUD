import React, { useState } from 'react'
import { Create } from './Create'

export const Tablhead = ( props) => {
    const [openModel, setOpenModel]=useState(false)

  return (
    <div >

        <div >
            <button onClick={()=>setOpenModel(true)}>
                Add User
                </button> 


        </div>

        

   {openModel && 

   
  
  
    <Create setUserData={props.setUserData} setOpenModel={setOpenModel}
   />}

  
    
    </div>
  )
}
