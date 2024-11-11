import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Create = ({ setUserData, setOpenModel, items }) => {

    
    const [data, setData] = useState({
        id : uuidv4(),
        name: "",
        age: "",
        job: ""
    });
    console.log(data ,"jsfjklhjkhkjhjk");
    const handleChange = (e) => {
        const { value, name } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const addData = () => {
        setUserData((prev) => [...prev, data]);
        setData({
            id : uuidv4(),
            name: "",
            age: "",
            job: ""
        });
        setOpenModel(false);
    };

    useEffect(() => {
        setOpenModel(true)
      if(items){
        setData(items)
      
      } 
    }, [items,setOpenModel]);
    const update = (items)=>{


        setUserData( (currentuser )=>{
            return currentuser.map((user , index)=>(
                index == currentuser
            ))
        })


    }

    return (
        <div>
            <div className="container">
                <div><h1>Todo List</h1></div>
                <div><button onClick={() => setOpenModel(false)}>Exit</button></div>
                
                <div>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="age"
                        value={data.age}
                        onChange={handleChange}
                        placeholder="Age"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="job"
                        value={data.job}
                        onChange={handleChange}
                        placeholder="Job"
                    />
                </div>
                {items.length > 0  ?  <button onClick={update}>Update</button> :  <button onClick={addData}>Submit</button>}
    
            </div>
        </div>
    );
};
