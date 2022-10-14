import React, { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route, Link, Switch,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import CreatVideoComponents from "./routes/CreatVideoComponent";
import Invoices from "./routes/invoices";
import reportWebVitals from "./reportWebVitals";

import { createRoot } from 'react-dom/client';
import HeaderComponent from "./components/HeaderComponent";
import ListVideosComponent from "./routes/ListVideosComponent";
import ViewVideoComponent from "./routes/ViewVideoComponent";
import UpdateVideoComponent from "./routes/UpdateVideoComponent";

import './App.css';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <div>
            <HeaderComponent />
            <div className="container">
                <Routes>
                    <Route path = "/" exact element={<ListVideosComponent />} />
                    <Route path = "/videos" element={<ListVideosComponent />} />
                    <Route path = "/add-video/:id" element={<CreatVideoComponents />} />
                    <Route path = "/view-video/:id" element={<ViewVideoComponent />}/>
                    <Route path = "/update-video/:id" element={<UpdateVideoComponent />}/>
                </Routes>
            </div>
            {/* <FooterCompenent /> */}
        </div>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
