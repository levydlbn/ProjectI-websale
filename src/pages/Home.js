import React from "react"
import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"

import AuthProvider from "../auth/AuthContext"

// import Signup from "../components/user/Signup"

const Home = ({ listProducts }) => {
    return ( <
        AuthProvider >
        <
        Header / >
        <
        Content listProducts = { listProducts }
        /> <
        Footer / >
        <
        /AuthProvider>
    )
}

export default Home