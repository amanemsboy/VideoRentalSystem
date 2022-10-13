import React, { Component } from 'react';
import VideoService from '../services/VideoService';
import {withRouter} from 'react-router-dom';

class CreatVideoComponents extends Component {

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

        this.changeVideosLanguageHandler = this.changeVideosLanguageHandler.bind(this);
        this.changeVideosPriceHandler =  this.changeVideosPriceHandler.bind(this);
        this.changeVideoTitleHandler = this.changeVideoTitleHandler.bind(this);
        this.changeVideosGenerHandler = this.changeVideosGenerHandler.bind(this);
        this.changeVideosYearHandler = this.changeVideosYearHandler.bind(this);
        this.saveVideos = this.saveVideos.bind(this);
    
    }




   componentDidMount() {

if (this.state.id === '_add') {
    return
}

else {

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

}

   

   saveVideos = (e) => {
    e.preventDefault();

    let video = {videosLanguage: this.state.videosLanguage, videosPrice: this.state.videosPrice, videosTitle: this.state.videosTitle,
    videosGener: this.state.videosGener, videosYear: this.state.videosYear };
    console.log('videos =>' + JSON.stringify(video));

if (this.state.id === '_add') {
    VideoService.createVideo(video).then(res =>{
        this.props.history.push('/videos')
    });
} else {
    VideoService.updateVideo(video, this.state.id).then(res => {
        this.props.history.push('/videos')
    });
}

  }

    changeVideosLanguageHandler = (event) => {

        this.setState({videosLanguage: event.target.value})
    }

    changeVideosPriceHandler = (event) => {

        this.setState({videosPrice: event.target.value})
    }

    changeVideoTitleHandler = (event) => {

        this.setState({videosTitle: event.target.value})
    }

    changeVideosGenerHandler = (event) => {

        this.setState({videosGener: event.target.value})
    }

    changeVideosYearHandler = (event) => {

        this.setState({videosYear: event.target.value})

    }

    cancel (){
        this.props.history.Push('/videos');

    }

    getTitle() {
        if (this.state.id === '_add') {
            return  <h3 className='text-center'> Add video </h3>
        } else {
            return  <h3 className='text-center'> Update video </h3>
        }
    }

    render() {
        return (
            <div>
                
                <div className='container'>
                        <div className='row'>

                            <div className='card col-md-6 offset-md-3 offset-md-3'>
                                    {
                                        this.getTitle()
                                    }
                                <h3 className='text-center'> Add video </h3>
                                <div className='card-body'>

                                        <form> 

                                            <div className='form-group'>

                                                <label> Videos Language </label>
                                                <input placeholder="Videos Language" name=' videosLanguage' className='form-control'
                                                 value={this.state.videosLanguage} onChange ={this.changeVideosLanguageHandler}/>
                                            </div>

                                            
                                            <div className='form-group'>

                                                <label> Videos Price </label>
                                                <input placeholder="Videos Price" name=' videosPrice' className='form-control'
                                                 value={this.state.videosPrice} onChange={this.changeVideosPriceHandler}/>
                                            </div>




                                            <div className='form-group'>

                                                <label> videosTitle </label>
                                                <input placeholder=" videos Title" name=' videosTitle' className='form-control'
                                                 value={this.state.videosTitle} onChange = {this.changeVideoTitleHandler} />
                                            </div>


                                              <div className='form-group'>

                                                <label> videosGener </label>
                                                <input placeholder="videos Gener" name=' videosGener' className='form-control'
                                                 value={this.state.videosGener} onChange = {this.changeVideosGenerHandler} />
                                            </div>


                                              <div className='form-group'>

                                                <label> videosYear </label>
                                                <input placeholder=" videos Year" name='videosYear' className='form-control'
                                                 value={this.state.videosYear} onChange = {this.changeVideosYearHandler} />
                                            </div>



                                          <button className='btn btn-success' onClick={this.saveVideos}> Save </button>
                                          <button className='btn btn-danger' onClick={this.cancel.bind(this)} style = {{marginLeft: "10px"}}> Cancel </button>
 
                                        </form>

                                </div>

                            </div>

                        </div>

                </div>

            </div>
        );
    }
}

export default withRouter(CreatVideoComponents);