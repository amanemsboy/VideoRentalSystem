import './App.css';
import './index.css';
import ListVideosComponent from './components/ListVideosComponent';
import HeaderComponent from './components/HeaderComponent';
import CreatVideoComponents from './components/CreatVideoComponent';
import ViewVideoComponent from './components/ViewVideoComponent';
import UpdateVideoComponent from './components/UpdateVideoComponent';

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import React from "react";

function App() {
  return (
      <Router>
        <div>
            <HeaderComponent />
            <div className="container">
                <Link to="add-video/1" >Add</Link>
                <Switch>
                    <Route path = "/videos">
                        <ListVideosComponent />
                    </Route>
                    <Route path = "/add-video/:id">
                        <CreatVideoComponents />
                    </Route>
                    <Route path = "/view-video/:id">
                        <ViewVideoComponent />
                    </Route>
                    <Route path = "/update-video/:id">
                        <UpdateVideoComponent />
                    </Route>
                    <Route path = "/">
                        <ListVideosComponent />
                    </Route>
                </Switch>
        </div>
            {/* <FooterCompenent /> */}
        </div>
      </Router>
  );
}

export default App;
