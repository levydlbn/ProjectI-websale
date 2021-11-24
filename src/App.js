import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthProvider from './auth/AuthContext';
import Header from './components/Header';
// import './App.css'
import Login from './components/user/Login';
import Signup from './components/user/Signup';
// import Signup from './components/user/Signup';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import Footer from './components/Footer'
// import NotFound from './pages/NotFound';
// import './App.css';

// lazy load - Code splitting
// const Home = React.lazy(() => import('./pages/Home'));

function App() {

    return ( <
        AuthProvider >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/user/signup"
        element = { < Signup / > }
        /> <
        Route path = "/user/login"
        element = { < Login / > }
        /> <
        Route element = { < NotFound / > }
        /> <
        /Routes> <
        /AuthProvider>     
    );
}

export default App;