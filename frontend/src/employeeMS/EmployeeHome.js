import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Employee.css';

class EmployeeHome extends React.Component {
    constructor(props){
        super(props);
        this.state = { employees : []};
    }

    componentDidMount(){
        this.fetchEmployees();
    }

    showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
    };

    fetchEmployees = () => {
        fetch("http://127.0.0.1:9094/api/v1/hcl/get_all_employees")
        .then(response => response.json()) // converts to json format
        .then(data => this.setState({ employees : data}))
        .catch(err => console.error(err));
    }

    deleteEmployee = (id) => {
        if(window.confirm("Delete this Employee ? ")){
            axios.delete(`http://127.0.0.1:9094/api/v1/hcl/delete-emp/${id}`)
            .then((response) => { this.showToast(response.data); this.fetchEmployees(); }) // handles success msg form backend
            .catch((err) => {
                if(err.response && err.response.data){
                    this.showToast("Error : " + err.response.data.message || err.response.data ); // handles resp excp msg form backend
                }
                else{ this.showToast("Unexpected Error Occurred"); }
            })
        }
    }

    render(){
        const cellSize = { border : '1.5px solid black', padding :'5px', textAlign : 'center', margin : '1% auto'};
        return (
            <>  
                <div className='EMPMS-webpage'>
                    <h1>Welcome to Employee Management System</h1>
                    <Link to="/addEmployee"><button>Add Employee</button></Link>
                    <div className="toast" id="toast"></div>
                    <div className='emp-home'>
                        <table style ={{border : '1.5px solid black', borderCollapse : 'collapse', padding : '5px', width : '80%', textAlign : 'center', margin : '1% auto'}}>
                            <thead>
                                <tr>
                                    <th style={cellSize}>Id</th>
                                    <th style={cellSize}>First Name</th>
                                    <th style={cellSize}>Last Name</th>
                                    <th style={cellSize}>Age</th>
                                    <th style={cellSize}>Phone</th>
                                    <th style={cellSize}>Email</th>
                                    <th style={cellSize}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.employees.map((emp, index) => (
                                <tr key = {emp.id} style={{ border : '1px solid black', padding : '5px', textAlign : 'center', backgroundColor : 'index %2 ==0 ? C0EDED : ghostWhite'}}>
                                    <td style={cellSize}>{emp.id}</td>
                                    <td style={cellSize}>{emp.firstName}</td>
                                    <td style={cellSize}>{emp.lastName}</td>
                                    <td style={cellSize}>{emp.age}</td>
                                    <td style={cellSize}>{emp.phone}</td>
                                    <td style={cellSize}>{emp.email}</td>                                    
                                    <td>
                                        <Link to ={`/update/${emp.id}`}><button>Update</button></Link>
                                        <button onClick={ () => this.deleteEmployee(emp.id)}>Delete</button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
};

export default EmployeeHome;    

// function EmployeeHome() {
//     return();
// }

// const EmployeeHome = () => {
//     return();
// }   