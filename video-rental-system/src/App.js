import { Navbar } from "react-bootstrap";
import Navbarcss from "./components/Navbar";
import NoMatch from "./routes/NoMatch";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";

import 'swiper/swiper.min.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'; 



import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import RoutesOne from "./config/Routes";

function App() {
  return (
<>
   <Routes>
    <Route render={props => (
        <>
            <Header {...props}/>
            <RoutesOne/>
            <Footer/>
        </>
    )}/>


</Routes>

<Login />

<Logout />

<Profile />

</>

  );
}

export default App;
