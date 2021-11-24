import React, { useEffect, useState } from 'react'

import '../static/css/base.css'
import '../static/css/content.css'

import ImageHeader1 from "../static/image/multisport.jpg"
import ImageHeader2 from "../static/image/thiet-ke-banner-bong-da-chuyen-nghiep-soi-dong3.jpg"
import ImageHeader3 from "../static/image/vietnam_football_team_wallpaper.jpg"
import ImageHeader4 from "../static/image/banner_adidasshoe.jpg"
import ImageHeader5 from "../static/image/slideshow_11140x438.jpg"
import ImageHeader6 from "../static/image/slideshow_21140x438.jpg"

import { FaChevronDown, FaChevronLeft, FaChevronRight, FaList } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Content = () => {

    const imageHeader = [ImageHeader1, ImageHeader2, ImageHeader3, ImageHeader4, ImageHeader5, ImageHeader6]
    const [imgHeader, setImgHeader] = useState(imageHeader[0])

    useEffect(() => {
        setTimeout(() => {
            setImgHeader(imageHeader[Math.floor(Math.random() * 6)])
        }, 15000)

        console.log('render')
            // return () => clearTimeout(timeImg)
    }, [imgHeader])

    // setTimeout(() => {
    //     setImgHeader(imageHeader[Math.floor(Math.random()*7)])
    //     console.log("render")
    // },10000000)


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
        div className = "content__sidebar col c-3" >
        <
        div className = "content__sidebar-title" >
        <
        div className = "content__sidebar-title-icon" > < FaList / > < /div> <
        p className = "content__sidebar-title-text" > Danh mục sản phẩm < /p> <
        /div> <
        div className = "content__sidebar-list" >
        <
        nav className = "content__sidebar-item" >
        <
        Link to = "/shirts"
        className = "content__sidebar-item-text" > Quần áo bóng đá < /Link> <
        /nav> <
        nav className = "content__sidebar-item" >
        <
        Link to = "/shoes"
        className = "content__sidebar-item-text" > Giày bóng đá < /Link> <
        /nav> <
        nav className = "content__sidebar-item" >
        <
        Link to = "/gloves"
        className = "content__sidebar-item-text" > Găng tay thủ môn < /Link> <
        /nav> <
        nav className = "content__sidebar-item" >
        <
        Link to = "/socks"
        className = "content__sidebar-item-text" > Tất bóng đá < /Link> <
        /nav> <
        nav className = "content__sidebar-item last" >
        <
        Link to = "/balls"
        className = "content__sidebar-item-text" > Quả bóng đá < /Link> <
        /nav> <
        /div> <
        /div> <
        div className = "content__product col c-9" >
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
        div className = "content__product-container" > adfsgfd < /div> <
        /div> <
        /div> <
        /div>          <
        /div>
    )
}

export default Content