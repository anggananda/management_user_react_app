import React, {useState, useEffect} from 'react'
import { getDataUsers } from '../utils/dataServices'
import { Link } from 'react-router-dom'

const SearchUser = ({setResult}) => {
    const [search, setSearch] = useState("")

    const fetchGetUsers = async () =>{
        try{
            const result = await getDataUsers(search)
            console.log(result);
            setResult(result)
        }catch(error){
            throw error
        }
    }

    useEffect(() =>{
        fetchGetUsers()
    }, [search])

    const handleSearch = (e) =>{
        if(e.target.value.length > 3 ){
            setSearch(e.target.value)
        }
        if(e.target.value.length < 2){
            setSearch("")
        }
    }
  return (
    <div className="flex justify-between items-center w-[80%] mx-auto">
        <input 
        type="text" 
        placeholder='search users...' 
        onChange={handleSearch}
        className='outline-none border rounded-md p-4 w-[30%] shadow-lg'
        />

        <Link to='/add' className="px-3 py-2 rounded-md bg-slate-800 text-white">Add+</Link>
    </div>
  )
}

export default SearchUser