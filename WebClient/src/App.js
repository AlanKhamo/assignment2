import React from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoutes from './Components/PrivateRoute';
import CreateNewModel from './Pages/CreateNewModel';
import NyJob from './Pages/NyJob';
import AddModelToJOb from './Components/AddModelToJob';
import DeleteModelFromJob from './Components/DeleteModelFromJob';
import SeeJob from './Components/SeeJob';
import AddExpenseToJob from './Components/AddExpenseToJob';
import Login from './Login';
import "./Nav.css"


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
        
            {/* <li><Link to ="/nyModel">Opret Ny Model</Link></li>
            <li><Link to ="/nytJob">Opret Nyt Job </Link></li>
            <li><Link to ="/modelTilJob">Tilføj model til job</Link></li>
            <li><Link to ="/modelFraJob">Slet model fra job</Link></li>
            <li><Link to ="/SeJobs">Se Jobs</Link></li>
            <li><Link to ="/addUdgift">tilføj en udgift til et job</Link></li> */}
    
            </u1>
    </nav>

    <Routes>
     <Route element={<PrivateRoutes/>}>
    
     
     {/* <Route path="/nyModel" element={<CreateNewModel/>} ></Route>
     <Route path="/nytJob" element={<NyJob/>} ></Route>
     <Route path="/modelTilJob" element={<AddModelToJOb/>} ></Route>
     <Route path="/modelFraJob" element={<DeleteModelFromJob/>} ></Route>
     <Route path="/SeJobs" element={<SeeJob/>} ></Route>
     <Route path="/addUdgift" element={<AddExpenseToJob/>} ></Route> */}
     </Route>

     <Route path ="/Login" element={<Login/>} ></Route>
   </Routes>
   </Router>
    </>
    

);
}
export default App;
