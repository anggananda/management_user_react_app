import React from 'react'
import SearchUser from './components/SearchUser'
import DisplayUsers from './components/DisplayUsers'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddDataUsers from './components/AddDataUsers'
import UpdateUser from './components/UpdateUser'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DisplayUsers/>}/>
        <Route path='/add' element={<AddDataUsers/>}/>
        <Route path='/update/:id' element={<UpdateUser/>}/>
      </Routes>
    </Router>
  )
}

export default App