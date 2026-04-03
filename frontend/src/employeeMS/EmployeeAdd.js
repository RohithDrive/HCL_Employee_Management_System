import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Employee.css';

// export default function EmployeeAdd() {}
// export default const EmployeeAdd = () => {}

export default class EmployeeAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            phone: '',
            email: ''
        };
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleAddEmployee = (event) => {
        event.preventDefault();
        axios.post(`http://127.0.0.1:9094/api/v1/hcl/add-employee`, this.state)
            .then(() => {
                // alert("Employee Added Successfully...!");
                this.showToast("Employee Added Successfully...!");
                console.log("Employee Added Successfully...!");
                this.handleCancel();
                window.location.href = "/home"; // to redirect to home page after adding employee
            })
            .catch((error) => {
                // alert("Error Occurred while Adding Employee...");
                this.showToast("Error Occurred while Adding Employee...");
                console.error("Error Occurred while Adding Employee...", error);
            })
    };

    handleDeleteEmployee = (event) => {
        let id = window.location.pathname.split("/").pop();
        axios.delete(`http://127.0.0.1:9094/api/v1/hcl/delete-emp/${id}`, this.state)
            .then((response) => {
                // alert(response.data.message || "Employee Deleted Successfully..!");
                // console.log(response.data.message || "Employee Deleted Successfully..!");
                let msg = response.data.message || "Employee Deleted Successfully..!";
                this.showToast(msg);
                console.log(msg);
            })
    };

    handleCancel = () => {
        this.setState({ firstName: '', lastName: '', age: '', phone: '', email: '' });;
        window.location.href = "/home";
    }

    render() {
        return (
            <>
                <div className='EMPMS-webpage'>
                    <h1>Add Employee</h1>
                    <Link to="/home"><button>Back to Home</button></Link>
                    <div className="toast" id="toast"></div>
                    <div className='emp-add'>
                        <form onSubmit={this.handleAddEmployee}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name : </label>
                                <input type="text" id="firstName" name="firstName" pattern="[A-Za-z ]+" placeholder='First Name'  value={this.state.firstName} onChange={this.handleChange} required /><br />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName"> Last Name : </label>
                                <input type="text" id="lastName" name="lastName" pattern="[A-Za-z ]+" placeholder='SurName' value={this.state.lastName} onChange={this.handleChange} required /> <br />
                            </div>
                            <label htmlFor="age" >Age : </label>
                            <input type="number" id="age" name="age" min="1" max="130" placeholder='Age' value={this.state.age} onChange={this.handleChange} required /> <br />
                            <div className="form-group">
                                <label htmlFor="phone">Phone : </label>
                                <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder='Phone Number' value={this.state.phone} onChange={this.handleChange} required /> <br />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email : </label>
                                <input type="email" id="email" name="email" placeholder='Email' value={this.state.email} onChange={this.handleChange} required /> <br />
                            </div>
                            <div className="form-button-group">
                                <button type="submit"> Submit Details </button>
                                <button type="Cancel" onClick={() => this.handleCancel()}> Cancel </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}