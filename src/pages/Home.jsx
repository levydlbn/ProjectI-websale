import React from 'react'
import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"
import Loading from '../components/Loading'

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
    handleTypeSortProduct,
    tabProducts,
    typeProduct,
    listSort,
    typeSortProduct,
    typeSortPrice,
    listSortPrice,
    handleSortPriceProduct,
    currentProduct,
    listUser,
    handleLoading,
    isLoadingHome,
    isLoadingTypeProduct,
    isLoadingProduct
}) => {

    return ( 
        <div>
            {
            isLoadingHome === true ?
            <Loading /> :
            <AuthProvider>
            <Header listProducts = { listProducts }
            cartItem = { cartItem }
            handleLogout = { handleLogout }
            textSearchProductRef = { textSearchProductRef }
            nowUser = { nowUser }
            handleSearchProduct = { handleSearchProduct }
            listUser = { listUser }
            handleLoading = { handleLoading }
            /> 
            <Content listProducts = { listProducts }
            cartItem = { cartItem }
            handleAddProduct = { handleAddProduct }
            typeSortPrice = { typeSortPrice }
            listSortPrice = {listSortPrice}
            handleSortPriceProduct = { handleSortPriceProduct }
            handleTypeProduct = { handleTypeProduct }
            handleTypeSortProduct = { handleTypeSortProduct }
            tabProducts = { tabProducts }
            typeProduct = { typeProduct }
            listSort = { listSort }
            typeSortProduct = { typeSortProduct }
            currentProduct = { currentProduct }
            textSearchProductRef = { textSearchProductRef }
            isLoadingTypeProduct = { isLoadingTypeProduct }
            isLoadingProduct = { isLoadingProduct }
            /> 
            <IconTelephone />
            <Footer />
            </AuthProvider>
        }

        </div>
    )
}
export default Home