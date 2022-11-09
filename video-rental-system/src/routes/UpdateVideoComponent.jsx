// import React, {useState} from 'react';
import React, { useState } from 'react';
import VideoService from '../services/VideoService';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert2';
import axios from 'axios';

const UpdateVideoComponent = (props) => {
    let navigate = useNavigate();
    const [ videosLanguage, setVideoLanguage] = useState('');
    const [ videosPrice, setVideoPrice] = useState('');
    const [ videosTitle, setVideoTitle] = useState('');
    const [ videosGener, setVideoGener] = useState('');
    const [ videosYear, setVideoYear] = useState('');

    const updateVideo = (e) => {
    e.preventDefault();
    let video = {
    language: videosLanguage,
    price: parseFloat(videosPrice),
    title: videosTitle,
    genre: videosGener,
    year: videosYear
    };
    VideoService.updateVideo(video).then(res => {
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

                                <h3 className='text-center'> Update video </h3>
                                <div className='card-body'>

                                        <form> 

                                            <div className='form-group'>

                                                <label> Videos Language </label>
                                                <input placeholder="Videos Language" name='videosLanguage' className='form-control'
                                                 value={videosLanguage} onChange = {(e) => setVideoLanguage(e.target.value)} />
                                            </div>

                                            
                                            <div className='form-group'>

                                                <label> Videos Price </label>
                                                <input placeholder="Videos Price" name='videosPrice' className='form-control' type={'number'}
                                                 value={videosPrice} onChange = {(e) => setVideoPrice(e.target.value)} />
                                            </div>


                                            <div className='form-group'>

                                                <label> Videos Title </label>
                                                <input placeholder="videos Title" name='videosTitle' className='form-control'
                                                 value={videosTitle} onChange = {(e) => setVideoTitle(e.target.value)}  />
                                            </div>


                                              <div className='form-group'>

                                                <label> Videos Genre </label>
                                                <input placeholder="videos Gener" name='videosGenre' className='form-control'
                                                 value={videosGener} onChange = {(e) => setVideoGener(e.target.value)}  />
                                            </div>


                                              <div className='form-group'>

                                                <label> Videos Year </label>
                                                <input placeholder="videos Year" name='videosYear' className='form-control' type={'date'}
                                                 value={videosYear} onChange = {(e) => setVideoYear(e.target.value)} />
                                            </div>

                                          <button className='btn btn-success' onClick = {(e) => updateVideo(e)} > Update </button>                                        
                                          <button className='btn btn-danger' style = {{marginLeft: "10px"}} onClick={(e) => cancel(e)} > Cancel </button>

                                        </form>

                                </div>

                            </div>

                        </div>

                </div>

            </div>
        );
    
}

export default UpdateVideoComponent;