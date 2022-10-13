import React, { StrictMode } from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListVideosComponent from './components/ListVideosComponent';
import CreatVideoComponents from './components/CreatVideoComponent';
import ViewVideoComponent from './components/ViewVideoComponent';
import UpdateVideoComponent from './components/UpdateVideoComponent';
import history  from './history';

const Routing = () => {

      return (<Router history={history}>
        <div className='container'>
        <Switch>
            <Route path = "/" exact component = {ListVideosComponent}/> 
            <Route path = "/videos"  component =  {ListVideosComponent}/>     
            <Route path = "/add-video/:id" component =  {CreatVideoComponents}/> 
            <Route path = "/vew-video/:id" component =  {ViewVideoComponent}/> 
            <Route path = "/update-video/:id" component =  {UpdateVideoComponent}/>  
            </Switch>
            </div>
    </Router>
);
}

const rootelement = document.getElementById('root');
const root = createRoot(rootelement)
root.render(
  <StrictMode>
    <Routing />
  </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
