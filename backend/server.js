const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "user_management"
})

db.connect(err =>{
    if(err) return log({message: "gagal tersambung ke database"})
    console.log({message: "berhasil terhubung ke database"});
})

const app = express()
const PORT = 8000

app.use(express.json())
app.use(cors())

app.get('/users', (req, res) =>{
    const sql = "SELECT * FROM users";
    db.query(sql, (error, result) =>{
        if(error) return res.status(500).json({ message: "gagal mengambil data" });
        res.json(result);
    });
});


app.get('/users/:id', (req, res) =>{
    const {id} = req.params
    const sql = "SELECT * FROM users WHERE id = ?"
    db.query(sql, [id], (error, result) =>{
        if(error) return res.json({message: `gagal menemukan user dengan id: ${id}`})
        res.json(result)
    })
})

app.post('/users', (req, res) =>{
    const {name, age, address, status} = req.body
    const sql = "INSERT INTO users (`name`, `age`, `address`, `status`) VALUES (?,?,?,?)"
    db.query(sql, [name, age, address, status], (error, result) =>{
        if(error) return res.json({message: "gagal menambahkan data"})
        res.json({message: "berhasil manambahkan data"})
    })
})

app.put('/users/:id', (req, res) =>{
    const {id} = req.params
    const {name, age, address, status} = req.body
    const sql = "UPDATE users SET name = ?, age = ?, address = ?, status = ? WHERE id = ?"
    db.query(sql, [name, age, address, status, id], (error, result) =>{
        if(error) return res.json({message: "Gagal memperbaharui data"})
        res.json({message: "Berhasil memperbaharui data"})
    })
})

app.delete('/users/:id', (req, res) =>{
    const {id} = req.params
    const sql = "DELETE FROM users WHERE id = ?"
    db.query(sql, [id], (error, result) =>{
        if(error) return res.json({message: "gagal menghapus data"})
        res.json({message: "berhasil manghapus data"})
    })
})

app.listen(PORT, () =>{
    console.log(`Server running on PORT: ${PORT}`);
})