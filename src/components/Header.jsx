import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import ImageIcon from "../static/image/shop-icon.png"
import ImageCart from "../static/image/cart-clipart-7.jpg"
import IconUser from "../static/image/165-1653686_female-user-icon-png-download-user-colorful-icon.png"

import ImgNoti1 from "../static/image/1-9.jpg"
import { FaSistrix, FaShoppingCart, FaRegBell } from "react-icons/fa"

import '../static/css/base.css'
import '../static/css/header.css'

const dataNotification = [{
        thum: { ImgNoti1 },
        title: 'hết hồn chưa! Voucher BẤT NGỜ',
        describe: '16H mã có mặt tại sàn chốt hạ đơn cùng mã hót giảm 30k số lượng có hạn - Săn ngay!'
    },
    {
        thum: { ImgNoti1 },
        title: 'Gấp! Bão Voucher giảm 50% Ập đến',
        describe: '12H Giờ vàng Shoppeepay -50% mã có mặt tại sàn chốt hạ đơn cùng mã hót giảm 30k số lượng có hạn - Săn ngay!'
    },
    {
        thum: { ImgNoti1 },
        title: 'hết hồn chưa! sdfsf Voucher BẤT NGỜ',
        describe: '16H mã có mặt tại sàn chốt hạ đơn cùng mã hót giảm 30k số lượng có hạn - Săn ngay!'
    },
]


const Header = ({ cartItem, 
              textSearchProductRef, 
              handleSearchProduct, 
              nowUser, 
              handleLogout,
              handleLoading,
             }) => {

        const totalProductInCart = cartItem.reduce((numberProduct, item) => numberProduct + item.quantity, 0)

        return ( <div className = "header" >
            <div className = "grid wide col c-12" >
            <div className = "header__navbar" >
            <div className = "header__navbar-content" >
            <nav className = "header__navbar-left" >
            <span className = "header__navbar-info-telephone" > HOTLINE: M.BẮC - 0965.163 .098 / M.NAM - 0843.234 .123 </span> 
            <span className = "header__navbar-info-time" > Thứ 2 - Thứ 7: 8 am - 6 pm </span> 
            </nav>

            <nav className = "header__navbar-right" >
            <div className = "header__navbar-list-info" >

            {
                nowUser.email === '' ?
                <div className = "header__navbar-info-user" >
                <div className = 'header__navbar-notification' >
                <div className = 'header__navbar-notification-icon' >
                <FaRegBell className = 'header__navbar-icon-notification' />
                <span> Thông báo </span> 
                </div> 
                <div className = 'header__navbar-notification-list' >
                <div className = 'header__navbar-notification-list-title' >
                Thông báo mới nhận </div> 
                {
                    dataNotification.map((item) => ( 
                        <div
                        className = 'header__navbar-notification-item'
                        key = { item.title }>
                        <img src = { ImgNoti1 }
                        alt = 'ads24df'
                        className = 'header__navbar-notification-item-img' />
                        <div className = 'header__navbar-notification-item-text'>
                        <h4 > { item.title } </h4> 
                        <p className = 'header__navbar-notification-item-describe'> {item.describe } </p> 
                        </div>
                        </div>
                    ))
                } <div className = 'header__navbar-notification-list-btn' >Xem tất cả </div> 
                </div> </div> 
                <li> 
                <Link to = "/user/signup" > Đăng ký </Link>
                </li>
                <li> <Link to = "/user/login" > Đăng nhập </Link>
                </li>
                <span className = "header__navbar-item-telephone" > LH : 1900 1009 </span> 
                </div> : <div className = "header__navbar-info-user">
                    <img src = { IconUser }
                    className = "header__navbar-info-user-icon"
                    alt='sdfsdfsdf' />
                <li> { nowUser.email } </li> 
                <button className = "header__navbar-logout-btn"
                onClick = { handleLogout } > Đăng xuất </button> 
                </div>}


                </div> 
                <div className = "header__navbar-list-support" >
                <li className = "header__navbar-item-support header__navbar-item-instruct auth-form-help-separate" >
                <Link to = "instruct" > Hướng dẫn </Link>
                </li>
                <li className = "header__navbar-item-support header__navbar-item-pay auth-form-help-separate" >
                <Link to = "pay" > Thanh toán </Link> 
                </li> 
                <li className = "header__navbar-item-support header__navbar-item-introduce" >
                <Link to = "introduce" > Giới thiệu </Link> 
                </li>
                </div> 
                </nav> 
                </div> 
                </div>

                <div className = "header__search" >
                <div className = "header__search-content" >
                <div className = "header__search-logo" >
                <Link to = "/"
                className = "header__search-logo-link" onClick={ () => handleLoading() } >
                <img src = { ImageIcon }
                alt = "icon shop"
                className = "header__search-logo-icon" />
                <p className = "header__search-logo-text"> Sport </p> 
                </Link> 
                </div> 
                <div className = "header__search-filter" >
                <div className = "header__search-filter-box" >
                <input ref = { textSearchProductRef }
                type = "text"
                placeholder = "Tìm kiếm sản phẩm"
                className = "header__search-filter-input" />
                <button onClick = { handleSearchProduct }
                className = "header__search-filter-select" >
                <div className = "header__search-filter-select-icon" > <FaSistrix /> 
                </div> 
                </button> 
                </div> <div className = "header__search-filter-pages" >
                <nav className = "header__search-filter-page-list">
                <ul className = "header__search-filter-page-link" >
                <Link to = "/shirts"
                className = "header__search-filter-page-item" > Áo bóng đá </Link> 
                <Link to = "/shoes"
                className = "header__search-filter-page-item" > Giày bóng đá </Link> 
                <Link to = "/gloves"
                className = "header__search-filter-page-item" > Găng tay thủ môn </Link> 
                <Link to = "/socks"
                className = "header__search-filter-page-item" > Tất bóng đá </Link> 
                <Link to = "/balls"
                className = "header__search-filter-page-item" > Quả bóng đá </Link> 
                </ul> 
                </nav> 
                </div> 
                </div> 
                <div className = "header__search-cart" >
                <div className = "header__search-cart-wrap" >
                <Link to = "/user/CartProduct" >
                <div className = "header__search-cart-icon" >
                <FaShoppingCart />
                <div className = "header-cart-notice" > { totalProductInCart } </div> 
                </div> 
                </Link> 
                <div className = "header__search-cart-list" > 
                   {
                    cartItem.length === 0 ?
                    <div className = 'header__search-cart-noproduct' >
                    <img src = { ImageCart }
                    alt = "sdfsdfds"
                    className = "header__search-cart-noproduct-img" />
                    <p className = "header__search-cart-noproduct-msg"> Chưa có sản phẩm </p> 
                    </div> : <div>
                    <div className = 'header__search-cart-title' > Sản phẩm mới thêm </div> 
                    {
                        cartItem.map((item) => (

                            <div className = 'header__search-cart-item' >
                            <img src = { item.thum }
                            className = 'header__search-cart-item-img'
                            alt = 'safasfdf' />
                            <p className = 'header__search-cart-item-describe' > { item.describe } </p> 
                            <span className = 'header__search-cart-item-price' > { item.price } đ </span> 
                            </div>

                        ))
                    } 
                    <div className = 'header__search-cart-item-btn-container' >
                    <Link to = "/user/CartProduct" >
                    <button className = 'header__search-cart-item-btn' > Xem giỏ hàng </button> 
                    </Link>
                    </div>
                    </div>
                } 
                </div> 
                </div> 
                </div>  
                </div> 
                </div>

                </div>

                </div>
            )
        }

        export default Header