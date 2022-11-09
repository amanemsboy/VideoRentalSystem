import React, { Component, useState } from 'react';
import CustomerService from '../services/CustomerService';
import {Link, useNavigate} from "react-router-dom";
// import ListCustomerComponent from '../css/ListVideoComponent.css';
import VideoComponent from '../css/VideoComponent.css'; 
import axios from 'axios';
import swal from 'sweetalert2';




class ListCustomerComponent extends Component {

    

    constructor (props) {
        super(props)

        this.state = {

            customers: []
        
        }

        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this)
        }

        deleteCustomer (id) {
            //rest api 
            CustomerService.deleteCustomer(id).then(res => {
                this.setState({customers: this.state.customers.filter(customer => customer.id !==id)}); 
            })
 
        }

        viewCustomers (id) {
    
            this.props.history.push(`/view-customers/${id}`);
        }

        editCustomer (id) {
        this.props.history.push(`/update-customer/${id}`); 

       }
    
       componentDidMount () {
       
        CustomerService.getCustomers().then((res) => {
            this.setState({customers: res.data});
        } );
       }

      addCustomer() {
        this.props.history.push(`/add-customer`);
       }
       
      render() {


        return (
            <div>

                <h2 className="text-center"> Customer List</h2>

                 <div className = "column">
                    {/* <Link to={'add-Customer/'} >Add</Link>
                     <button className='btn btn-primary' onClick={this.addCustomer}> Add Customers </button> */}

                     <button> <Link className='add-Customer' to={'add-customer/'} > Add Customers </Link> </button>
                    
                 </div>
                 <br></br>
 
                <div className= "row">

                    <table className="table table-striped table-bordered">

                            <thead>

                                <tr> 
                          
                                    <th> Customer First Name </th>
                                    <th> Customer Last Name </th>
                                    <th> Customer User Name </th>
                                    <th> Customer Phone Number </th>
                                    <th> Customer Address </th>
                                    <th> Customer Email </th>

                                </tr>

                                </thead>

                                <tbody>

                                        {

                                            this.state.customers.map(
                                                Customer => 
                                                <tr key = {Customer.id}>
                                        
                                                    <td> { Customer.firstName} </td>
                                                    <td> { Customer.lastName} </td>
                                                    <td> { Customer.userName} </td>
                                                    <td> { Customer.phoneNumber} </td>
                                                    <td> { Customer.address} </td>
                                                    <td> { Customer.email} </td>
                                                    
                                                    <td>

                                                        <div className='function-buttons'>

                                                        {/* <button onClick={() => this.editCustomer(Customer.id)} className= "btn btn-info" style={{marginLeft: "30px"}}> Update </button> */}
                                                        <button> <Link className='update' to={'update-customer/:id'}>  Update</Link> </button>

                                                        {/* <button className="btn btn-danger" onClick = {(e) => deleteCustomer(e, customer.id)} > Delete </button> */}
                                                        <button> <Link className='delete' to={'deleteCustomers'}>  Delete </Link> </button>

                                                        {/* <button style={{marginLeft: "30px"}} onClick={ () => this.viewCustomers(Customer.id)} className="btn btn-info"> View </button> */}
                                                        <button> <Link className='view' to={'viewCustomers'}>  View </Link> </button>
                                              
                                                        </div>

                                                    </td>

                                                </tr>
                                            )

                                        }

                                </tbody>

                    </table>                              

                </div>

            </div>
        );
    }
}

export default ListCustomerComponent;