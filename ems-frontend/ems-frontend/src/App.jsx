import { useState } from 'react'
import './App.css'
import EmployeeList from './components/EmployeeList';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';

function App() {

  return (
    <>
<Navbar />
      <Routes>
        <Route exact path='/login' element={<Login />}></Route>
           <Route exact path="/" element={ <EmployeeList />}></Route>
        <Route exact path='/signup' element={<SignUp />}></Route>
        <Route exact path='/profile' element={< Profile />}></Route>
        <Route exact path='/add' element={< AddEmployee />}></Route>
   <Route exact path="/employee" element={ <EmployeeList />}></Route>
   <Route exact path='/update' element={<UpdateEmployee />}></Route>
      </Routes>
    <Footer />
    </>
  )
};

export default App
