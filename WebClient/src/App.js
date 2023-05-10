import React from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Login from './Login';
import Logout from './Logout';
import "./Nav.css"
import PrivateRoutes from './Components/PrivateRoute';
import CreateNewModel from './Components/CreateNewModel';
import CreateNewJob from './Components/CreateNewJob';
import CreateNewManager from './Components/CreateNewManager';
import AddModelToJOb from './Components/AddModelToJob';
import DeleteModelFromJob from './Components/DeleteModelFromJob';
import SeeJob from './Components/SeeJob';
import AddExpenseToJob from './Components/AddExpenseToJob';


function App() {
    const token = localStorage.getItem("token");
    // if (token) {
    //     return <Login/>;
    // }
return (
    <>
    <Router>
    <nav> 
        <u1>
            <li><Link to ="/Login">Login</Link></li>
            <li><Link to ="/DeleteModelFromJob">delete Model from Job</Link></li>
            <li><Link to ="/SeeJob">See Jobs</Link></li>
            
            <li><Link to ="/newModel">Opret Ny Model</Link></li>
            <li><Link to ="/newJob">Opret Nyt Job </Link></li>
            <li><Link to ="/newManager">Opret Ny Manager </Link></li>
            <li><Link to ="/modelToJob">Tilføj model til job</Link></li>
            <li><Link to ="/addExpense">tilføj en udgift til et job</Link></li>
            <li><Link to ="/Logout">LogOut</Link></li>
    
            </u1>
    </nav>

    <Routes>
     <Route element={<PrivateRoutes/>}>
     
   
     </Route>
     <Route path ="/Login" element={<Login/>} ></Route>
     <Route path="/Logout" element={<Logout/>} ></Route>
     
     {/* // Moving the statements below to the privateRoute later */}

     <Route path="/newModel" element={<CreateNewModel/>} ></Route>
     <Route path="/newJob" element={<CreateNewJob/>} ></Route>
     <Route path="/newManager" element={<CreateNewManager/>} ></Route>

     <Route path="/modelToJob" element={<AddModelToJOb/>} ></Route>
     <Route path="/DeleteModelFromJob" element={<DeleteModelFromJob/>} ></Route>
     <Route path="/SeeJob" element={<SeeJob/>} ></Route>
     <Route path="/addExpense" element={<AddExpenseToJob/>} ></Route>


   </Routes>
   </Router>
    </>
    

);
}
export default App;
