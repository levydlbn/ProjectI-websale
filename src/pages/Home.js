import React from 'react'
import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"

import AuthProvider from "../auth/AuthContext"
import IconTelephone from '../components/IconTelephone'

// import Signup from "../components/user/Signup"

const Home = ({
    listProducts,
    cartItem,
    handleAddProduct,
    textSearchProductRef,
    nowUser,
    handleLogout,
    handleSearchProduct,
    handleTypeProduct,
    tabProducts,
    typeProduct,
    currentProduct,
    listUser
}) => {

    return ( <
        AuthProvider >
        <
        Header listProducts = { listProducts }
        cartItem = { cartItem }
        handleLogout = { handleLogout }
        textSearchProductRef = { textSearchProductRef }
        nowUser = { nowUser }
        handleSearchProduct = { handleSearchProduct }
        listUser = { listUser }
        /> <
        Content listProducts = { listProducts }
        cartItem = { cartItem }
        handleAddProduct = { handleAddProduct }
        handleTypeProduct = { handleTypeProduct }
        tabProducts = { tabProducts }
        typeProduct = { typeProduct }
        currentProduct = { currentProduct }
        textSearchProductRef = { textSearchProductRef }
        /> <
        IconTelephone / >
        <
        Footer / >
        <
        /AuthProvider>
    )
}

export default Home