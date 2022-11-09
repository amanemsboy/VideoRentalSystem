import React, { Component, useState } from 'react';
import VideoService from '../services/VideoService';
import {Link, useNavigate} from "react-router-dom";
// import ListVideoComponent from '../css/ListVideoComponent.css';
import VideoComponent from '../css/VideoComponent.css'; 
import axios from 'axios';
import swal from 'sweetalert2';

// const ListVideosComponent = (props) => {

//     let navigate = useNavigate();

//     const [addVideo, setAddvideo] = useState('');
//     const [editVideo, setEditVideo] = useState('');
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


class ListVideosComponent extends Component {

    

    constructor (props) {
        super(props)

        this.state = {

            videos: []
        
        }

        this.addVideo = this.addVideo.bind(this);
        this.editVideo = this.editVideo.bind(this);
        this.deleteVideo = this.deleteVideo.bind(this)
        }

        deleteVideo (id) {
            //rest api 
            VideoService.deleteVideo(id).then(res => {
                this.setState({videos: this.state.videos.filter(video => video.video_Id !==id)}); 
            })
 
        }

        viewVideos (id) {
    
            this.props.history.push(`/view-videos/${id}`);
        }

        editVideo (id) {
        this.props.history.push(`/update-video/${id}`); 

       }
    
       componentDidMount () {
       
        VideoService.getVideos().then((res) => {
            console.log("videos", res.data);
            this.setState({videos: res.data});
        } );
       }

       componentDidUpdate () {
       
        VideoService.getVideos().then((res) => {
            console.log("videos", res.data);
            this.setState({videos: res.data});
        } );
       }

      addVideo() {
        this.props.history.push(`/add-video`);
       }

    deleteVideo = (e,vid, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Delting";
        VideoService.deleteVideo(vid, id).then(res => thisClicked.innerText = "Delete")
    }

       
      render() {
        return (
            <div>

                <h2 className="text-center"> Movies List</h2>

                 <div className = "column">
                    {/* <Link to={'add-video/'} >Add</Link>
                     <button className='btn btn-primary' onClick={this.addVideo}> Add Videos </button> */}

                     <button> <Link className='add-video' to={'/add-video/'} > Add Videos </Link> </button>
                    
                 </div>
                 <br></br>
 
                <div className= "row">

                    <table className="table table-striped table-bordered">

                            <thead>

                                <tr> 
                          
                                    <th> Videos Language </th>
                                    <th> Videos Price </th>
                                    <th> Videos Title </th>
                                    <th> Videos Genre </th>
                                    <th> Videos Year </th>
                                    <th> Actions </th>

                                </tr>

                                </thead>

                                <tbody>

                                        {

                                            [...this.state.videos].sort((a, b) => a.video_Id - b.video_Id).map(
                                                video => 
                                                <tr key = {video.video_Id}>
                                        
                                                    <td> { video.language} </td>
                                                    <td> { video.price} </td>
                                                    <td> { video.title} </td>
                                                    <td> { video.genre} </td>
                                                    <td> { video.year} </td>

                                                    <td>

                                                        <div className='function-buttons'>

                                                        {/* <button onClick={() => this.editVideo(video.id)} className= "btn btn-info" style={{marginLeft: "30px"}}> Update </button> */}
                                                        <button> <Link className='update' to={'/update-video/' + video.video_Id } state={{video: video}}>  Update</Link> </button>

                                                        <button className="btn btn-danger" onClick = {(e) => this.deleteVideo(e, video, video.video_Id)} > Delete </button>
                                                        {/* <button> <Link className='delete' to={'deleteVideos/'}>  Delete </Link> </button> */}

                                                        {/* <button style={{marginLeft: "30px"}} onClick={ () => this.viewVideos(video.id)} className="btn btn-info"> View </button> */}
                                                        <button> <Link className='view' to={'viewVideos'}>  View </Link> </button>
                                              
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

export default ListVideosComponent;