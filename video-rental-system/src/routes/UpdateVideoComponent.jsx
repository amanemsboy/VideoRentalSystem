import React, { Component } from 'react';
import VideoService from '../services/VideoService';

class UpdateVideoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

       id: this.props.match.params.id,
       videosLanguage: '',
       videosPrice: '',
       videosTitle: '',
       videosGener: '',
       videosYear: ''

        }

        this.changevideosLanguageHandler = this.changevideosLanguageHandler.bind(this);
        this.changevideosPriceHandler =  this.changevideosPriceHandler.bind(this);
        this.changevideoTitleHandler = this.changevideoTitleHandler.bind(this);
        this.changevideosGenerHandler = this.changevideosGenerHandler.bind(this);
        this.changevideosYearHandler = this.changevideosYearHandler.bind(this);
        this.updateVideo = this.updateVideo.bind(this);
    
    }


   componentDidMount() {
    VideoService.getVideoById(this.state.id).then((res) => {
        let video = res.data;
        this.setState({videosLanguage: video.videosLanguage,
        videosTitle: video.videosTitle,
        videosGener: video.videosGener,
        videosPrice: video.videosPrice,
        videosYear:  video.videosYear
    });
   });
}

    updateVideo = (e) => {
    e.preventDefault();

    let video = {videosLanguage: this.state.videosLanguage, videosPrice: this.state.videosPrice, videosTitle: this.state.videosTitle,
    videosGener: this.state.videosGener, videosYear: this.state.videosYear };
    console.log('videos =>' + JSON.stringify(video));
    VideoService.updateVideo(video, this.state.id).then(res => {
        this.props.history.push('/videos')
    });

   }



    changevideosLanguageHandler = (event) => {

        this.setState({videosLanguage: event.target.value})
    }

    changevideosPriceHandler = (event) => {

        this.setState({videosPrice: event.target.value})
    }

    changevideoTitleHandler = (event) => {

        this.setState({videosTitle: event.target.value})
    }

    changevideosGenerHandler = (event) => {

        this.setState({videosGener: event.target.value})
    }

    changevideosYearHandler = (event) => {

        this.setState({videosYear: event.target.value})

    }

    cancel () {

        this.props.history.oush('/videos');

    }

    render() {
        return (
            <div>
                
                <div className='container'>
                        <div className='row'>

                            <div className='card col-md-6 offset-md-3 offset-md-3'>

                                <h3 className='text-center'> Add video </h3>
                                <div className='card-body'>

                                        <form> 

                                            <div className='form-group'>

                                                <label> Videos Language </label>
                                                <input placeholder=" Videos Language" name=' videosLanguage' className='form-control'
                                                 value={this.state.videosLanguage} onChange = {this.changevideosLanguageHandler} />
                                            </div>

                                            
                                            <div className='form-group'>

                                                <label> Videos Price </label>
                                                <input placeholder="Videos Price" name=' videosPrice' className='form-control'
                                                 value={this.state.videosPrice} onChange = {this.changevideosPriceHandler} />
                                            </div>




                                            <div className='form-group'>

                                                <label> videosTitle </label>
                                                <input placeholder=" videos Title" name=' videosTitle' className='form-control'
                                                 value={this.state.videosTitle} onChange = {this.changevideosTitleHandler} />
                                            </div>


                                              <div className='form-group'>

                                                <label> videosGener </label>
                                                <input placeholder="videos Gener" name=' videosGener' className='form-control'
                                                 value={this.state.videosGener} onChange = {this.changevideosGenerHandler} />
                                            </div>


                                              <div className='form-group'>

                                                <label> videosYear </label>
                                                <input placeholder=" videos Year" name=' videosYear' className='form-control'
                                                 value={this.state.videosYear} onChange = {this.changevideosYearHandler} />
                                            </div>



                                          <button className='btn btn-success' onClick={this.updateVideo}> Save </button>
                                          <button className='btn btn-danger' onClick={this.cancel.bind(this)} style = {{marginLeft: "10px"}}> Save </button>
 
                                        </form>

                                </div>

                            </div>

                        </div>

                </div>

            </div>
        );
    }
}

export default UpdateVideoComponent;