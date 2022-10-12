import './App.css';
import ListVideosComponent from './components/ListVideosComponent';
import HeaderComponent from './components/HeaderComponent';
//import FooterCompenent from './components/FooterCompenent';
import CreatVideoComponents from './components/CreatVideoComponent';
import ViewVideoComponent from './components/ViewVideoComponent';
import UpdateVideoComponent from './components/UpdateVideoComponent';

import {withRouter} from 'react-router-dom'

function App() {
  return (
   
    <div>
       <HeaderComponent />
        <div className="container">

             <ListVideosComponent />
             
  </div>

            {/* <FooterCompenent /> */}


    </div>
  );
}

export default withRouter(App);


