import React, { useState } from "react";
import { postDataUsers } from "../utils/dataServices";
import { useNavigate } from "react-router-dom";

const AddDataUsers = () => {
    const [dataForm, setDataForm] = useState({
        name: "",
        age: 0,
        address: "",
        status: ""
    })

    const navigate = useNavigate()

    const handleInput = (e) =>{
        const {name, value} = e.target
        setDataForm({...dataForm, [name]: value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const {name, age, address, status} = dataForm
        if(!name || !age || !address || !status){
            return alert("Tolong isi semua field jangan dikosongkan!")
        }
        try{
            await postDataUsers(dataForm)
            navigate('/')
        }catch(error){
            throw error
        }
    }

    console.log(dataForm);


  return (
    <div className="py-10">
      <form action="" onSubmit={handleSubmit} className=" w-[70%] mx-auto p-5 rounded-md shadow-lg">
        <h1 className="text-center font-bold text-2xl uppercase">Input Data User</h1>
        <div className="flex items-center border my-4 rounded-md">
          <label className="block w-[10%] px-4" htmlFor="name">
            name
          </label>
          <input
            className="p-3 bg-slate-200 w-[90%] outline-none"
            type="text"
            name="name"
            placeholder="name..."
            onChange={handleInput}
          />
        </div>
        <div className="flex items-center border my-4 rounded-md">
          <label className="block w-[10%] px-4" htmlFor="name">
            age
          </label>
          <input
            className="p-3 bg-slate-200 w-[90%] outline-none"
            type="text"
            name="age"
            placeholder="age..."
            onChange={handleInput}
          />
        </div>
        <div className="flex items-center border my-4 rounded-md">
          <label className="block w-[10%] px-4" htmlFor="name">
            address
          </label>
          <input
            className="p-3 bg-slate-200 w-[90%] outline-none"
            type="text"
            name="address"
            placeholder="address..."
            onChange={handleInput}
          />
        </div>
        <div className="flex items-center border my-4 rounded-md">
          <label className="block w-[10%] px-4" htmlFor="name">
            status
          </label>
          <input
            className="p-3 bg-slate-200 w-[90%] outline-none"
            type="text"
            name="status"
            placeholder="status..."
            onChange={handleInput}
          />
        </div>
        <div className="flex justify-center items-center mt-4">
            <button className="px-3 py-2 rounded-md bg-slate-800 text-white">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddDataUsers;
