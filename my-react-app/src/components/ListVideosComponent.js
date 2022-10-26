import React, { Component } from 'react';
import VideoService from '../services/VideoService';
import HeaderComponent from './HeaderComponent';

import {withRouter, Link} from "react-router-dom";

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

        deleteVideo(id) {
            //rest api 
            VideoService.deleteVideo(id).then(res => {
                this.setState({videos: this.state.videos.filter(video => video.id !==id)}); 
            })
 
        }

        viewVideos (id) {
    
            this.props.history.push(`/view-videos/${id}`);
        }

        editVideo(id) {
        this.props.history.push(`/update-video/${id}`); 

       }
    
       componentDidMount () {
       
        VideoService.getVideos().then((res) => {
            this.setState({videos: res.data});
        } );
       }

      addVideo() {
        console.log("props", this.props)
        this.props.history.push(`/add-video/1`);
       }
    
       

 
      render() {
   
        return (
            <div>

                <h2 className="text-center"> Employees List</h2>

                 <div className = "column">
                    <Link to={'add-video/1'} >Add</Link>
                     <button className='btn btn-primary' onClick={this.addVideo}> Add Videos </button>
                    
                 </div>
                 <br></br>
 
                <div className= "row">

                    <table className="table table-striped table-bordered">

                            <thead>

                                <tr> 

                                    <th> Videos Language </th>
                                    <th> Videos Price </th>
                                    <th> Videos Title </th>
                                    <th> Videos Gener </th>
                                    <th> Videos Year </th>
                                    <th> Actions </th>

                                </tr>

                                </thead>

                                <tbody>

                                        {

                                            this.state.videos.map(
                                                video => 
                                                <tr key = {video.id}>

                                                    <td> { video.language} </td>
                                                    <td> { video.price} </td>
                                                    <td> { video.title} </td>
                                                    <td> { video.genre} </td>
                                                    <td> { video.year} </td>

                                                    <td>
                                                        <button onClick={() => this.editVideo(video.id)} className= "btn btn-info" style={{marginLeft: "30px"}}> Update </button>
                                                        <button style={{marginLeft: "30px"}} onClick={ () => this.deleteVideo(video.id)} className="btn btn-danger"> Delete </button>
                                                        <button style={{marginLeft: "30px"}} onClick={ () => this.viewVideos(video.id)} className="btn btn-info"> View </button>

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

export default withRouter(ListVideosComponent);