import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Button from './button/button';
// import CreateProd from './button/createProd';
// import SearchProd from './button/searchProd';
import StuData from "./Student/stu_data";
import Login from "./Student/login";
import LineChart from './Student/line';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <React.StrictMode>
      <App />
      <Routes>
        
        {/* <Route path='/' element={<Button/>} ></Route>
        <Route path='/products' element={<CreateProd/>} >
              
        </Route>
        <Route path='/AddToCart' element={<SearchProd/>}></Route> */}
         <Route path='/' element={<Login/>} ></Route>
      <Route path='/studata' element={<StuData/>} ></Route>
      <Route path='/comp' element={<LineChart/>} ></Route>

      </Routes>
    </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
