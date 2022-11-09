import React, { render } from "react-dom";
import { ReactDOM } from "react";
import {
    BrowserRouter,
    Routes,
    Route, 
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import CreatVideoComponents from "./routes/CreatVideoComponent";
import Invoices from "./routes/invoices";
import reportWebVitals from "./reportWebVitals";
import Login from "./Login";

/* Customer */

import ListCustomerComponent from './Customer/ListCustomerComponent';
import UpdateCustomerComponent from "./Customer/UpdateCustomerComponent";
import ViewCustomerComponent from "./Customer/ViewCustomerComponent";
import CreatCustomerComponents from "./Customer/CreatCustomerComponent"


/* Movies */

import { createRoot } from 'react-dom/client';
import ListVideosComponent from "./routes/ListVideosComponent";
import ViewVideoComponent from "./routes/ViewVideoComponent";
import UpdateVideoComponent from "./routes/UpdateVideoComponent";
import Navbar from "./components/Navbar";
import NoMatch from "./routes/NoMatch";
import { Auth0Provider } from '@auth0/auth0-react';


import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';


/* Rental */

import ListRentalComponent from "./Rental/ListRentalComponent";
import CreatRentalComponent from "./Rental/CreatRentalComponent";
import UpdateRentalComponent from "./Rental/UpdateRentalComponent";
import ViewRentalComponent from "./Rental/ViewRentalComponent"

const domain = 'dev-bc6t2vcqpvwz5r3k.us.auth0.com'
const clientID = '1Akk9JsiQGsciiR003u8ZwJwNX93rULx'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(

  

    <BrowserRouter>
       <Auth0Provider
         domain={domain}
         clientId={clientID}
         redirectUri={window.location.origin}> 
      {/* <App /> */}
    </Auth0Provider>


        <div>
           {/* <Navbar /> */}
            <div className="container">
          
                <Routes>

             
            
                            {/* Movies Routing */}
                            
                    {/* <Route path = "/" exact element={<ListVideosComponent />} /> */}
                    <Route path = "/add-video/" element={<CreatVideoComponents />} />
                    <Route path = "/view-video/:id" element={<ViewVideoComponent />}/>
                    <Route path = "/update-video/:id" element={<UpdateVideoComponent />}/>
                   

                            {/* Customer Routing */}

                    {/* <Route path = "/" element={<ListCustomerComponent />} /> */}
                    <Route path = "/update-customer/:id" element={<UpdateCustomerComponent />} />
                    <Route path = "/add-customer" element={<creatCustomerComponent />} />
                    <Route path = "/view-customer/:id" element={<ViewCustomerComponent/>}/>
                   

                    {/* <Route path = "/" element={<ListRentalComponent />} /> */}
                    <Route path = "/update-rental/:id" element={<UpdateRentalComponent />} />
                    <Route path = "/add-rental" element={<CreatRentalComponent />} />
                    <Route path = "/view-rental/:id" element={<ViewRentalComponent/>}/>
                    
                        
                    <Route path=  "*" exact element={<NoMatch />}/>

                    <Route path='/:category/search/:keyword'element={Catalog} />
 
                    <Route path='/:category/:id' element={Detail} />

                    <Route path='/:category' element={Catalog} />

                    <Route path='/' exact  element={Home}  />
                
                </Routes>

                {/* < App /> */}

             
            </div>
        
        </div>
     
    

    </BrowserRouter>



);

  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
