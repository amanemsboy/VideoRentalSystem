import React, { Component, useState } from 'react';
import RentalService from '../services/RentalService';
import {Link, useNavigate} from "react-router-dom";
// import ListVideoComponent from '../css/ListVideoComponent.css';
import VideoComponent from '../css/VideoComponent.css'; 
import axios from 'axios';
import swal from 'sweetalert2';

// const ListVideosComponent = (props) => {

//     let navigate = useNavigate();

//     const [addRental, setaddRental] = useState('');
//     const [editRental, seteditRental] = useState('');
//     const [deleteVideos, setDeletVideos] = useState('');

    // const deleteVideo = (e, id) => {
    //     e.preventDefault();

    //     const thisClicked = e.currentTarget;
    //     thisClicked.innerText = "Delting";

    //     axios.delete(`/api/delete-category/${id}`).then(res=>{
    //             if(res.data.status === 200) 
    //             {
    //                 swal("success",res.data.message,"success");
    //                 thisClicked.closest("tr").remove();
    //             }
    //             else if(res.data.message,"success");
    //             thisClicked.innerText = "Delete";
    //     });
     
    // }


class ListRentalComponent extends Component {

    

    constructor (props) {
        super(props)

        this.state = {

            videos: []
        
        }

        this.addRental = this.addRental.bind(this);
        this.editRental = this.editRental.bind(this);
        this.deleteVideo = this.deleteVideo.bind(this)
        }

        deleteVideo (id) {
            //rest api 
            RentalService.deleteVideo(id).then(res => {
                this.setState({videos: this.state.videos.filter(video => video.id !==id)}); 
            })
 
        }

        viewVideos (id) {
    
            this.props.history.push(`/view-rentals/${id}`);
        }

        editRental (id) {
        this.props.history.push(`/update-rental/${id}`); 

       }
    
       componentDidMount () {
       
        RentalService.getVideos().then((res) => {
            this.setState({videos: res.data});
        } );
       }

      addRental() {
        this.props.history.push(`/add-rental`);
       }
       
      render() {


        return (
            <div>

                <h2 className="text-center"> Movies List</h2>

                 <div className = "column">
                    {/* <Link to={'add-video/'} >Add</Link>
                     <button className='btn btn-primary' onClick={this.addRental}> Add Videos </button> */}

                     <button> <Link className='add-rental' to={'add-rental/'} > Add Videos </Link> </button>
                    
                 </div>
                 <br></br>
 
                <div className= "row">

                    <table className="table table-striped table-bordered">

                            <thead>

                                <tr> 
                          
                                    <th> Rental ID </th>
                                    <th> Customer ID </th>
                                    <th> Movie ID </th>
                                    <th> customer First Name </th>
                                    <th> Customer Last Name  </th>
                                    <th> Total Cost </th>
                                    <th> Rental Expiry </th>
                                    <th> Is Returned </th>

                                </tr>

                                </thead>

                                <tbody>

                                        {

                                            this.state.videos.map(
                                                video => 
                                                <tr key = {video.id}>
                                        
                                                    <td> { video.rentalId} </td>
                                                    <td> { video.customerId} </td>
                                                    <td> { video.movieId} </td>
                                                    <td> { video.customerFirstName} </td>
                                                    <td> { video.customerLastName} </td>
                                                    <td> { video.totalCost} </td>
                                                    <td> { video.rentalExpiry} </td>
                                                    <td> { video.isReturned} </td>

                                                    <td>

                                                        <div className='function-buttons'>

                                                        {/* <button onClick={() => this.editRental(video.id)} className= "btn btn-info" style={{marginLeft: "30px"}}> Update </button> */}
                                                        <button> <Link className='update' to={'update-rental/:id'}>  Update</Link> </button>

                                                        {/* <button className="btn btn-danger" onClick = {(e) => deleteVideo(e, video.id)} > Delete </button> */}
                                                        <button> <Link className='delete' to={'deleteRental'}>  Delete </Link> </button>

                                                        {/* <button style={{marginLeft: "30px"}} onClick={ () => this.viewVideos(video.id)} className="btn btn-info"> View </button> */}
                                                        <button> <Link className='view' to={'viewRental'}>  View </Link> </button>
                                              
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

export default ListRentalComponent;