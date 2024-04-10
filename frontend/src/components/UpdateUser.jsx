import React, {useState, useEffect} from 'react'
import { getDataById, updateDataUsers } from '../utils/dataServices'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
    const [users, setUsers] = useState({
        name: '',
        age: 0,
        address: "",
        status: ''
    })
    const {id} = useParams()
    const navigate = useNavigate()

    const getDataUser = async () =>{
        try{
            const result = await getDataById(id)
            console.log(result);
            setUsers(result[0])
        }catch(error){
            throw error
        }
    }

    useEffect(() =>{
        getDataUser()
    }, [])

    const handleChange = (e) =>{
        const {name, value} = e.target
        setUsers({...users, [name]: value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        try{
            await updateDataUsers(id, users)
            navigate('/')
        }catch(error){
            throw error
        }
    }

  return (
    <div className="py-10">
      <form action="" onSubmit={handleSubmit}  className=" w-[70%] mx-auto p-5 rounded-md shadow-lg">
        <h1 className="text-center font-bold text-2xl uppercase">Update Data Users</h1>
        <div className="flex items-center border my-4 rounded-md">
          <label className="block w-[10%] px-4" htmlFor="name">
            name
          </label>
          <input
            className="p-3 bg-slate-200 w-[90%] outline-none"
            type="text"
            name="name"
            value={users.name}
            placeholder="name..."
            onChange={handleChange}
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
            value={users.age}
            placeholder="age..."
            onChange={handleChange}
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
            value={users.address}
            placeholder="address..."
            onChange={handleChange}
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
            value={users.status}
            placeholder="status..."
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center items-center mt-4">
            <button className="px-3 py-2 rounded-md bg-slate-800 text-white">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateUser