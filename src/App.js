import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthProvider from './auth/AuthContext';
import Cart from './components/user/Cart';
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
    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/product`)
            .then(res => res.json())
            .then(products => {
                setListProducts(products)
                console.log("render")
            })
    }, [])
    return ( <
            AuthProvider >
            <
            Routes >
            <
            Route path = "/"
            element = { < Home listProducts = { listProducts }
                />} / >
                <
                Route path = "/user/signup"
                element = { < Signup / > }
                /> <
                Route path = "/user/login"
                element = { < Login / > }
                /> <
                Route path = "user/CartProduct"
                element = { < Cart listProducts = { listProducts }
                    />} / >
                    <
                    Route element = { < NotFound / > }
                    /> <
                    /Routes> <
                    /AuthProvider>     
                );
            }

            export default App;