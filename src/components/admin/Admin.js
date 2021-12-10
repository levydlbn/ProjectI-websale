import React from 'react'
import { Route, Routes } from 'react-router'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import HomeAdmin from './HomeAdmin'
import ProductManager from './ProductManager'

import './css/admin.css'
import '../../static/css/base.css'

const Admin = ({ listProducts }) => {
        return ( <
            div className = "admin" >
            <
            div className = "admin__container" >
            <
            div className = "admin__topbar" >
            <
            Topbar / >
            <
            /div> <
            div className = "admin__content grid wide row col c-12" >
            <
            div className = "admin__sidebar c-25" >
            <
            Sidebar / >
            <
            /div> <
            div className = "admin__maincontent c-95" >
            <
            Routes >
            <
            Route path = "/"
            element = { < HomeAdmin listProducts = { listProducts }
                />} / >
                <
                Route path = "/product"
                element = { < ProductManager / > }
                /> <
                /Routes> <
                /div> <
                /div> <
                /div>

                <
                /div>
            )
        }

        export default Admin