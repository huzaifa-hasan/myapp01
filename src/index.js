import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Details from './pages/details';
import Welcome from './pages/welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome/>,
    children: [
      {
        path: '/details',
        element: <Details/>
      }
    ]
  },
  {
    path: '/register',
    element: <div>
    <div class='pageHead'><h1>Register</h1></div>
    <div class='pageBody'>
    <div class='anchorButton'>
      <Link to='/login' class='linkText'>Login</Link>
    </div>
    <div class='anchorButton'>
      <Link to='../' class='linkText'>Back to home</Link>
    </div>
    </div>
  </div> 
  },
  {
    path: '/login',
    element: <div>
      <div class='pageHead'><h1>Login</h1></div>
      <div class='pageBody'>
      <div class='anchorButton'>
        <Link to='../'>Back to home</Link>
      </div>
      <div class='anchorButton'>
        <Link to='/register'>Register</Link>
      </div>
      </div>  
    </div> 
  },
  {
    path: '/home',
    element: <App/>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
