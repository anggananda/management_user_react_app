import { useNavigate } from "react-router-dom"

const baseUrl = import.meta.env.VITE_URL_USERS

export const getDataUsers = async (search) =>{
    try{
        const response = await fetch("http://localhost:8000/users")
        if(!response.ok) throw new Error("Gagal terhubung ke API")
        const datas = await response.json()
        const data = datas.filter(data => data.name.toLowerCase().includes(search.toLowerCase()))
        return data
    }catch(error){
        throw error
    }
}

export const getDataById = async (id) =>{
    try{
        const response = await fetch('http://localhost:8000/users/'+id)
        if(!response.ok) throw new Error("gagal mengambil data user by id: " + id)
        const data = await response.json()
        return data
    }catch(error){
        throw error
    }
}

export const postDataUsers = async (data) =>{
    try{
        const response = await fetch('http://localhost:8000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        if(!response.ok) throw new Error("gagal menambahkan data")
        return alert("Berhasil menambahkan data!")
    }catch(error){
        throw error
    }
}

export const deleteDataUsers = async (id) =>{
    try{
        const response = await fetch('http://localhost:8000/users/'+id, {
            method: "DELETE"
        })
        if(!response.ok) throw new Error("gagal menghapus data")
        return alert("Berhasil menghapus data")
    }catch(error){
        throw error
    }
}

export const updateDataUsers = async (id, data) =>{
    try{
        const response = await fetch('http://localhost:8000/users/'+id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        if(!response.ok) throw new Error("data gagal untuk diperbahatui")
        return alert("data berhasil di perbaharui")
    }catch(error){
        throw error
    }
} 