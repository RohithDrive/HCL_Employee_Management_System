import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import EmployeeHome from './employeeMS/EmployeeHome';
import EmployeeAdd from './employeeMS/EmployeeAdd';
import EmployeeUpdate from './employeeMS/EmployeeUpdate';

function App() {

    return (
        <div className="App">

            {/* <h1>Welcome to Employee Management System</h1> */}
            {/* <EmployeeHome /> */}
            {/* <EmployeeAdd /> */}
            {/* <EmployeeUpdate /> */}
            <Router>
                <Routes>
                    <Route path="/home" element={<Navigate to="/" />} />
                    <Route path="/" element={<EmployeeHome />} />
                    <Route path="/addEmployee" element={<EmployeeAdd />} />
                    <Route path="/update/:id" element={<EmployeeUpdate />} />
                </Routes>
            </Router>


        </div>
    )
}

export default App;
