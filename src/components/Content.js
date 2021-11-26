import React, { useEffect, useState } from 'react'

import '../static/css/base.css'
import '../static/css/content.css'

import ImageHeader1 from "../static/image/multisport.jpg"
import ImageHeader2 from "../static/image/thiet-ke-banner-bong-da-chuyen-nghiep-soi-dong3.jpg"
import ImageHeader3 from "../static/image/vietnam_football_team_wallpaper.jpg"
import ImageHeader4 from "../static/image/banner_adidasshoe.jpg"
import ImageHeader5 from "../static/image/slideshow_11140x438.jpg"
import ImageHeader6 from "../static/image/slideshow_21140x438.jpg"
// import Iconquality from "../static/image/101-1010604_24-hour-delivery-guarantee-hd-png-download.png"

import { FaChevronDown, FaChevronLeft, FaChevronRight, FaList, FaShoppingCart } from 'react-icons/fa'

const tabProducts = [
    { tab: 'clothes', title: 'Quần áo bóng đá' },
    { tab: 'shoes', title: 'Giày áo bóng đá' },
    { tab: 'gloves', title: 'Găng tay thủ môn' },
    { tab: 'socks', title: 'Tất bóng đá' },
    { tab: 'balls', title: 'Quả bóng đá' }
]

const Content = ({ listProducts }) => {

    const imageHeader = [ImageHeader1, ImageHeader2, ImageHeader3, ImageHeader4, ImageHeader5, ImageHeader6]
    const [imgHeader, setImgHeader] = useState(imageHeader[0])

    const [typeProduct, setTypeProduct] = useState('')

    // xem lai
    const fullProduct = listProducts

    useEffect(() => {
        setTimeout(() => {
            setImgHeader(imageHeader[Math.floor(Math.random() * 6)])
        }, 15000)

        // return () => clearTimeout(timeImg)
    }, [imgHeader])

    //xem lai
    const handleAddProduct = () => {
        console.log("sfsdfdsf")
    }

    // setTimeout(() => {
    //     setImgHeader(imageHeader[Math.floor(Math.random()*7)])
    //     console.log("render")
    // },10000000)
    // useState
    // 1. Init state: 
    // 2. Actions
    // 
    // useReducer
    // 1. Init state
    // 2. Actions
    // 3. Reducer
    // 4. Dispatch

    useEffect(() => {

    }, [typeProduct])


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
        p className = "content__sidebar-title-text" > Tất cả sản phẩm < /p> <
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
                    () => setTypeProduct(tabProduct.tab) } >
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
        /div> <
        div className = "content__product-control-pages" >
        <
        div className = "content__product-control-page-number" > 3 / 100 < /div> <
        div className = "content__product-control-page-direction" >
        <
        div className = "content__product-control-page-direction-icon" > < FaChevronLeft / > < /div> <
        div className = "content__product-control-page-direction-icon" > < FaChevronRight / > < /div> <
        /div> <
        /div>

        <
        /div> <
        div className = "content__product-container row" > {
            fullProduct.map(product => ( <
                div className = "content__product-item col c-3" >
                <
                div className = "content__product-item-container"
                key = { product.id } >
                <
                img src = { product.thum }
                alt = { product.name }
                className = "product__img" / >
                <
                div className = "product__info" >
                <
                div className = "product__info-describe" > { product.describe } <
                /div> <
                div className = "product__info-price-origin" >
                <
                p className = "product__info-price" > Giá: { product.price } < /p> <
                button onClick = {
                    () => handleAddProduct(product) }
                className = "btn btn-add-to-cart" > < FaShoppingCart / > < /button> <
                /div>         <
                /div> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /div> <
        /div>          <
        /div>
    )
}

export default Content