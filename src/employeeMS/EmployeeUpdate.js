import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Employee.css';

export default class EmployeeUpdate extends React.Component {
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

    componentDidMount() {
        let id = window.location.pathname.split("/").pop();
        axios.get(`http://127.0.0.1:9094/api/v1/hcl/get-emp/${id}`)
            .then((response) => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    age: response.data.age,
                    phone: response.data.phone,
                    email: response.data.email
                })
            })
            .catch((error) => {
                let msg = error.response?.data?.message || error.response?.data?.error || "Error Occurred while Fetching Employee Details...";
                // alert(error.response?.data?.message || "Error Occurred while Fetching Employee Details...");
                // console.error(error.response?.data?.message || "Error Occurred while Fetching Employee Details...", error);
                this.showToast(msg);
                console.error(msg, error);
            });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleUpdateEmployee = (event) => {
        let id = window.location.pathname.split("/").pop(); // to get id from url
        event.preventDefault();
        axios.put(`http://127.0.0.1:9094/api/v1/hcl/update-emp/${id}`, this.state)
            .then((response) => {
                this.setState({ response: response.data }); // fill the form with existing details of employee to update
                // alert(response.data.message || "Employee Updated Successfully...!");
                // console.log("Employee Updated Successfully...!");
                let msg = response.data.message || "Employee Updated Successfully...!";
                this.showToast(msg);
                console.log(msg);
                this.handleCancel();
                window.location.href = "/home"; // to redirect to home page after updating employee
            })
    };

    handleCancel = () => {
        // this.setState({ firstName: '', lastName: '', age: '', phone: '', email: '' });
        window.Location.href = "/home";
    };

    showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    };

    render() {
        return (
            <>
                <div className='EMPMS-webpage'>
                    <h1>Update Employee</h1>
                    <Link to="/home"><button>Back to Home</button></Link>
                    <div className="toast" id="toast"></div>
                    <div className='emp-update'>
                        <form onSubmit={this.handleUpdateEmployee}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name : </label>
                                <input type="text" id="firstName" name="firstName" pattern="[A-Za-z ]+" placeholder='First Name' value={this.state.firstName} onChange={this.handleChange} required /><br />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName"> Last Name : </label>
                                <input type="text" id="lastName" name="lastName" pattern="[A-Za-z ]+" placeholder='SurName' value={this.state.lastName} onChange={this.handleChange} required /> <br />
                            </div>
                            <label htmlFor="age">Age : </label>
                            <input type="number" id="age" name="age" min="1" max="130" placeholder='Age' value={this.state.age} onChange={this.handleChange} required /> <br />
                            <div className="form-group">
                                <label htmlFor="phone">Phone : </label>
                                <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder='Phone Number' value={this.state.phone} onChange={this.handleChange} required /> <br />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email : </label>
                                <input type="email" id="email" name="email" placeholder='Email' value={this.state.email} onChange={this.handleChange} required /> <br />
                            </div>
                            <div className='form-button-group'>
                                <button type="submit"> Update Details </button>
                                <button type="Cancel" onClick={this.handleCancel}> Cancel </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}