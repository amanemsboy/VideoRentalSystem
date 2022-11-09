import React, {useState} from 'react';
import CustomerService from '../services/CustomerService';
import { useNavigate } from "react-router-dom";

import Creat from '../css/Creat.css';
import { Button } from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'


const UpdateCustomerComponent = (props) => {
    let navigate = useNavigate();
    const [ customerFirstName, setcustomerFirstName] = useState('');
    const [ customerLastName, setCustomerLastName] = useState('');
    const [ customerUserName, setCustomerUserName] = useState('');
    const [ customerPhoneNumber, setCustomerPhoneNumber] = useState('');
    const [ customerAddress, setCustomerAddress] = useState('');
    const [ customerEmail, setCustomerEmail] = useState('');


    const updateCustomer = (e) => {
        e.preventDefault();
        let customer = {
            firstName: customerFirstName,
            lastName: customerLastName,
            userName: customerUserName,
            phoneNumber: customerPhoneNumber,
            address: customerAddress,
            email: customerEmail
        };
        CustomerService.updateCustomer(customer).then(res => {
            navigate('/')
        });
    }

    const cancel = (e) => {
        e.preventDefault();
       navigate('/')
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>

                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'> Update Customer </h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>

                                    <label> Customer First Name </label>
                                    <input placeholder=" Customer First Name" name=' customerFirstName' className='form-control' required
                                           value={customerFirstName} onChange = {(e) => setcustomerFirstName(e.target.value)} />
                                </div>

                                <div className='form-group'>
                                    <label> Customer Last Name </label>
                                    <input placeholder="Customer Last Name" name=' CustomerLastName' className='form-control' required
                                           value={customerLastName} onChange = {(e) => setCustomerLastName(e.target.value)} />
                                </div>

                                <div className='form-group'>
                                    <label> Customer User Name </label>
                                    <input placeholder=" Custmer User Name" name=' userName' className='form-control' required
                                           value={customerUserName} onChange = {(e) => setCustomerUserName(e.target.value)} />
                                </div>

                                <div className='form-group'>

                                    <label> Customer Phone Number </label>
                                    <input placeholder="Customer Phone Number" name='phoneNumber' className='form-control' type={"number"} required
                                           value={customerPhoneNumber} onChange = {(e) => setCustomerPhoneNumber(e.target.value)} />
                                </div>

                                <div className='form-group'>

                                    <label> Customer Address </label>
                                    <input placeholder=" Customer Address" name='address' className='form-control'required
                                           value={customerAddress} onChange = {(e) => setCustomerAddress(e.target.value)} />
                                </div>

                                <div className='form-group'>

                                     <label> Customer Email </label>
                                    <input placeholder=" Customer Email" name='address' className='form-control' required
                                    value={customerEmail} onChange = {(e) => setCustomerEmail(e.target.value)} />

                                </div>


                                <button className='btn btn-success' onClick={(e) => updateCustomer(e)} > Update </button>
                                <button className='btn btn-danger' style = {{marginLeft: "10px"}} onClick={(e) => cancel(e)}>Cancel </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default UpdateCustomerComponent;