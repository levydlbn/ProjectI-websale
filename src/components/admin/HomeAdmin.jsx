import React from 'react'

import './css/homeadmin.css'

import iconVoucher from '../.././static/image/th (2).jfif'
import iconOrder from '../.././static/image/img_509212.png'
import iconShop from '../.././static/image/shop-icon.png'
import { FaHome, FaShoppingBag, FaAddressBook, FaUserPlus, FaProductHunt, FaShoppingCart, FaCogs, FaNewspaper, FaUsers, FaPlus } from 'react-icons/fa'


const HomeAdmin = ({ listProducts }) => {

    const listProductNew = listProducts.slice(1, 10)

    return ( 
    <div className = 'home' >
        <div className = 'home__header' >
        <div className = 'home__header-title' > THÔNG TIN CHUNG </div> <div className = 'home__header-info' >
        <div className = 'home__header-info-item' >
        <div className = 'home__header-info-item-img other' >
        <img src = { iconVoucher }
        className = 'home__header-info-item-icon'
        alt = 'adsfasdf' />
        </div> 
        <div className = 'home__header-info-item-text' >
        <p> VOUCHER </p> 
        <p> 62 </p> 
        <p> Còn hạn </p> 
        </div> 
        </div> 
        <div className = 'home__header-info-item' >
        <div className = 'home__header-info-item-img' >
        <FaProductHunt className = 'home__header-info-item-icon'
        alt = 'adsfasdfsdf' />
        </div> <div className = 'home__header-info-item-text' >
        <p> SẢN PHẨM </p> 
        <p> { listProducts.length } </p> 
        </div> 
        </div> 
        <div className = 'home__header-info-item' >
        <div className = 'home__header-info-item-img other' >
        <img src = { iconOrder }
        className = 'home__header-info-item-icon'
        alt = 'adsfasdfsdf' />
        </div> 
        <div className = 'home__header-info-item-text' >
        <p > ĐƠN HÀNG </p> 
        <p > 112 </p> 
        <p > Tháng này </p> 
        </div> 
        </div> 
        <div className = 'home__header-info-item' >
        <div className = 'home__header-info-item-img' >
        <FaUsers className = 'home__header-info-item-icon' />
        </div> 
        <div className = 'home__header-info-item-text' >
        <p> KHÁCH HÀNG </p> 
        <p> 1999 </p> 
        <p> Tháng này </p> 
        </div> 
        </div> 
        </div> 
        </div> 
        <div className = 'home__body row c-12'>
        <div className = 'home__body-info-account-shop col c-4' >
        <div className = 'home__body-info-shop-content' >
        <h3 > SỐ DƯ TÀI KHOẢN CỬA HÀNG </h3> 
        <div className = 'home__body-info-sportshop' >
        <h4 > Địa chỉ Ví cửa hàng </h4>
        <p> 0x wer23424243sdf234234 </p> 
        <h4> Số dư các ví </h4> 
        <span > Ví tích điểm: 545.444 điểm </span> 
        </div> 
        </div> 
        </div> 
        <div className = 'home__body-info-shop col c-4' >
        <div className = 'home__body-info-shop-content' >
        <h3 > THÔNG TIN CỬA HÀNG </h3>
        <div className = 'home__body-info-sportshop' >
        <img src = { iconShop }
        className = 'home__body-info-sportshop-icon'
        alt = 'adsfasdfsdfsdf' />
        <h3 > Đồ thể thao Sport - Shop </h3> 
        <p> Mã cửa hàng: 999999 </p> 
        <p> Gói website đang sử dụng: Gói không giới hạn </p> 
        <p> Thời gian sử dụng: 26 - 01 - 2021: 00: 00: 00 </p> 
        <p> 0965.999 .999 / SportShop @gmail.com.vn </p> 
        <p > 99 Tân Bình, Trung Ương, Hải Phòng </p> 
        </div> 
        <div className = 'home__body-info-setting' >
        <FaCogs className = 'home__body-info-setting-icon' /> 
        Sửa thông tin của hàng 
        </div> 
        <div className = 'home__body-info-setting' >
        <FaPlus className = 'home__body-info-setting-icon' />
        Cấp quyền bán hàng 
        </div> 
        <div className = 'home__body-info-setting' >
        <FaPlus className = 'home__body-info-setting-icon' />
        Gia hạn sử dụng website 
        </div> 
        </div> 
        </div>

        <div className = 'home__body-info-new-product col c-4' >
        <div className = 'home__body-info-shop-content product' >
        <h3> SẢN PHẨM MỚI </h3> {
            listProductNew.map((item) => ( 
                <div className = 'home__body-info-new-product-item' >
                <img src = { item.thum }
                className = 'home__body-info-product-img'
                alt = 'adsf' />
                <span className = 'home__body-info-product-describe' > { item.describe } </span> 
                <p> { item.price } đ </p> 
                </div>
            ))
        } 
        </div>
        </div> 
        </div> 
        </div>
    )
}

export default HomeAdmin