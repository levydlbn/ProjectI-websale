import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

import '../static/css/base.css'
import '../static/css/content.css'

import ImageHeader1 from "../static/image/multisport.jpg"
import ImageHeader2 from "../static/image/thiet-ke-banner-bong-da-chuyen-nghiep-soi-dong.jpg"
import ImageHeader3 from "../static/image/BANNER-1.png"
import ImageHeader4 from "../static/image/banner_adidasshoe.jpg"
import ImageHeader5 from "../static/image/slideshow_11140x438.jpg"
import ImageHeader6 from "../static/image/slideshow_21140x438.jpg"
// import Iconquality from "../static/image/101-1010604_24-hour-delivery-guarantee-hd-png-download.png"

import { FaChevronDown, FaList, FaCartPlus, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'



const Content = ({
    listProducts,
    handleAddProduct,
    handleTypeProduct,
    tabProducts,
    typeProduct,
    currentProduct,
    textSearchProductRef
}) => {

    const [pageNumber, setPageNumber] = useState(0)

    const productsPerPage = 30
    const pagesVisited = pageNumber * productsPerPage


    const imageHeader = [ImageHeader1, ImageHeader2, ImageHeader3, ImageHeader4, ImageHeader5, ImageHeader6]
    const [imgHeader, setImgHeader] = useState(imageHeader[0])



    // xem lai
    useEffect(() => {
        setTimeout(() => {
            setImgHeader(imageHeader[Math.floor(Math.random() * 6)])
        }, 15000)

        // return () => clearTimeout(timeImg)
    }, [imgHeader])


    useEffect(() => {
            window.scrollTo(0, 360)
        }, [pageNumber])
        // useState
        // 1. Init state: 
        // 2. Actions
        // 
        // useReducer
        // 1. Init state
        // 2. Actions
        // 3. Reducer
        // 4. Dispatch 


    const displayProducts = currentProduct.slice(pagesVisited, pagesVisited + productsPerPage).map(product => ( <
        div key = { product.id }
        className = "content__product-item col c-25" >
        <
        div className = "content__product-item-container" >
        <
        Link to = { `/product/${product.id}` }
        style = {
            { margin: 0 } } >
        <
        img src = { product.thum }
        alt = { product.name }
        className = "product__img" / >
        <
        /Link>

        <
        div className = "product__info" >
        <
        div className = "product__info-describe" > { product.describe } <
        /div> <
        div className = "product__info-price-origin" >
        <
        p className = "product__info-price" > Giá: { product.price }
        đ < /p> <
        button onClick = {
            () => handleAddProduct(product) }
        className = "btn btn-add-to-cart" > < FaCartPlus / > < /button> <
        /div>         <
        /div> <
        /div> <
        /div>
    ))


    const pageCount = Math.ceil(currentProduct.length / productsPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }


    return ( <
        div className = "content" >
        <
        div className = "grid wide" >
        <
        div className = "content__header col c-12" >
        <
        div className = "content__header-image" >
        <
        img src = { imgHeader }
        alt = "Image heading"
        className = "content__header-image-item" / >
        <
        /div> <
        /div>

        <
        div className = "main__content" >
        <
        div className = "content__sidebar col c-2" >
        <
        div className = "content__sidebar-title" >
        <
        div className = "content__sidebar-title-icon" > < FaList / > < /div> <
        p className = "content__sidebar-title-text" > Danh mục sản phẩm < /p> <
        /div> <
        div className = "content__sidebar-list" > {
            tabProducts.map(tabProduct => ( <
                nav className = "content__sidebar-item"
                key = { tabProduct.tab }
                style = {
                    typeProduct === tabProduct.tab ? {
                        backgroundColor: '#8e8efa'
                    } : {}
                }
                onClick = {
                    () => handleTypeProduct(tabProduct.tab) } >
                <
                p className = "content__sidebar-item-text"
                style = {
                    { fontSize: 14, marginLeft: 10 } } > { tabProduct.title } <
                /p> <
                /nav>
            ))
        }

        <
        /div> <
        /div> <
        div className = "content__product col c-10" >
        <
        div className = "content__product-control" >
        <
        div className = "content__product-control-sort" >
        <
        p className = "content__product-control-title" > Sắp xếp theo < /p> <
        button className = "btn btn-sort primary" > Liên quan < /button> <
        button className = "btn btn-sort" > Mới nhất < /button> <
        button className = "btn btn-sort" > Bán chạy < /button> <
        div className = "content__product-control-price" >
        <
        p className = "content__product-control-price-title" > Giá < /p> <
        div className = "content__product-control-price-icon" > < FaChevronDown / > < /div> <
        /div> <
        /div>                           <
        /div>

        <
        div className = "content__product-container row" > { displayProducts } <
        /div> <
        div >
        <
        ReactPaginate previousLabel = { < FaAngleLeft / > }
        nextLabel = { < FaAngleRight / > }
        pageCount = { pageCount }
        onPageChange = { changePage }
        containerClassName = { "paginationBttns" }
        previousLinkClassName = { "previousBttn" }
        nextLinkClassName = { "nextBttn" }
        disabledClassName = { "paginationDisabled" }
        activeClassName = { "paginationActive" }
        /> <
        /div> <
        /div> <
        /div> <
        /div>          <
        /div>
    )
}

export default Content