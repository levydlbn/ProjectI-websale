import React from 'react'
import { Route, Routes } from 'react-router'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import HomeAdmin from './HomeAdmin'
import Sale from './Sale'
import ProductManager from './ProductManager'

import './css/admin.css'
import '../../static/css/base.css'
import Statistical from './Statistical'
import Customer from './Customer'
import Order from './Order'
import Collaborators from './Collaborators'

const Admin = ({ listProducts, listUser }) => {
        return ( 
            <div className = "admin" >
                <div className = "admin__container" >
                <div className = "admin__topbar" >
                <Topbar />
                </div>  
                <div className = "admin__content grid wide row col c-12" >
                <div className = "admin__sidebar c-25" >
                <Sidebar />
                </div>  <div className = "admin__maincontent c-95" >
                <Routes >
                <Route path = "/"
                element = { <HomeAdmin listProducts = { listProducts }/>} />
                    <Route path = "/product"
                    element = { <ProductManager listProducts = { listProducts }/>} />
                    <Route path = "/sale"
                        element = { <Sale /> } />  
                    <Route path = "/statistical"
                        element = { <Statistical /> }/>  
                    <Route path = "/customer"
                        element = { <Customer listUser = { listUser }/>} />
                    <Route path = "/order"
                            element = { <Order /> }/>   
                    <Route path = "/collaborators"
                            element = { <Collaborators /> }/>

                </Routes>  
                </div> 

                </div> 
                            
                </div>

            </div>
             )
         }

                    export default Admin