import React, {useState} from 'react';
import RentalService from '../services/RentalService';
import { useNavigate } from "react-router-dom";

import Creat from '../css/Creat.css';
import { Button } from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert';



const UpdateRentalComponent = (props) => {
    let navigate = useNavigate();
    const [ rentalId, setRentalId] = useState('');
    const [ customerId, setCustomerId] = useState('');
    const [ movieId, setMovieId] = useState('');
    const [ customerFirstName, setCustomerFirstName] = useState('');
    const [ customerLastName, setCustomerLastName] = useState('');
    const [ totalCost, setTotalCost] = useState('');
    const [ rentalExpiry, setRentalExpiry] = useState('');
    const [ isReturned, setIsReturned] = useState('');


    const saveVideos = (e) => {
        e.preventDefault();
        let rental = {
            rental_id: rentalId,
            fk_customer: customerId,
            fk_movie: movieId,
            customerFirstName : customerFirstName,
            customerLastName : customerLastName,
            totalCost: parseFloat(totalCost), 
            rentalExpiry: rentalExpiry,
            isReturned: isReturned,
        };
        RentalService.creatVideo(rental).then(res => {
            navigate('/')
            swal({
                title: "Movie Rented successfully !",
                text: res.data.message,
                icon: "success",
                button: "Okay",
              });
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
                        <h3 className='text-center'> Add Rental </h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>

                                    <label> Rental ID </label>
                                    <input placeholder=" Videos Language" name=' rentalID' className='form-control' required
                                           value={rentalId} onChange = {(e) => setRentalId(e.target.value)} />
                                </div>

                                <div className='form-group'>
                                    <label> Customer ID </label>
                                    <input placeholder=" Customer ID" name=' customerId' className='form-control' required
                                           value={customerId} onChange = {(e) => setCustomerId(e.target.value)} />
                                </div>

                                <div className='form-group'>
                                    <label> Movie ID </label>
                                    <input placeholder=" Movie ID " name='MovieId' className='form-control' required
                                           value={movieId} onChange = {(e) => setMovieId(e.target.value)} />
                                </div>

                                <div className='form-group'>
                                    <label> customer First Name </label>
                                    <input placeholder=" Customer Last Name" name='customerFirstName ' className='form-control' required
                                           value={customerFirstName} onChange = {(e) => setCustomerFirstName(e.target.value)} />
                                </div>

                                <div className='form-group'>
                                    <label> Customer Last Name </label>
                                    <input placeholder=" Customer Last Name " name='CustomerLastName' className='form-control' required
                                           value={customerLastName} onChange = {(e) => setCustomerLastName(e.target.value)} />
                                </div>

                                <div className='form-group'>
                                    <label> Total Cost </label>
                                    <input placeholder=" Total Cost" name=' totalCost' className='form-control' type={"number"} required
                                           value={totalCost} onChange = {(e) => setTotalCost(e.target.value)} />
                                </div>

                                <div className='form-group'>

                                    <label> Rental Expiry </label>
                                    <input placeholder=" Rental Expiry" name='Rental Expiry' className='form-control' required
                                           value={rentalExpiry} onChange = {(e) => setRentalExpiry(e.target.value)} />
                                </div>
                                <div className='form-group'>

                                    <label> Is Returned </label>
                                    <input placeholder=" Is Returned " name='isReturned' className='form-control' type={"date"} required
                                           value={isReturned} onChange = {(e) => setIsReturned(e.target.value)} />
                                </div>
                                <button className='btn btn-success' onClick={(e) => saveVideos(e)} > Save </button>
                                <button className='btn btn-danger' style = {{marginLeft: "10px"}} onClick={(e) => cancel(e)}>Cancel </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default UpdateRentalComponent;