import React, { useState } from 'react'
// import './app.css'

export const Create = (props) => {
    const [data, setData] = useState({
        name: "",
        age: "",
        job: ""
    })
   


    const handlechange = (e) => {
     
        

 const { value , name} = e.target
 setData((prev) =>{ return {...prev , [name] : value}})



    }
    const addData =()=>{

        props.setUserData((prev)=> [...prev , data])  
          setData({
            name: "",
            age: "",
            job: ""
          })
          props.setOpenModel(false)

    }
    return (
        <>
        <div>
            <div className='container'>

                <div> <h1>Todo List</h1></div>

               <div> <button onClick={()=>props.setOpenModel(false)}>Exit</button></div>
                    <div >
                        <input type="text" name='name' value={data.name}  onChange={handlechange}/>


                    </div>
                    <div>
                        <input type="number" name='age' value={data.age} onChange={handlechange} />


                    </div>
                    <div>
                        <input type="text" name='job' value={data.job} onChange={handlechange} />


                    </div>
                    <button onClick={()=> addData()}>Submit</button>
            </div>

        </div>



</>
    )
}
