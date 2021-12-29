import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Footer from '../Footer'

import ImageIcon from '../../static/image/shop-icon.png'
import ImagePayment1 from '../../static/image/th.jfif'
import ImagePayment2 from '../../static/image/thanh-toan-qua-the-visa-masstercard.jpg'

import '../../static/css/checkout.css'
import '../../static/css/base.css'
import IconTelephone from '../IconTelephone'

const Checkout = ({ cartItem, handleClearCart }) => {

    const totalPrice = cartItem.reduce((price, item) => price + item.quantity * item.price, 0)

    const nameRef = useRef()
    const phoneNumberRef = useRef()
    const deliveryAddressRef = useRef()
    const cityRef = useRef()
    const districtRef = useRef()
    const wardRef = useRef()

    const navigate = useNavigate()

    const tabLocation = [{ tab: 'office', title: 'VĂN PHÒNG' },
        { tab: 'home', title: 'NHÀ RIÊNG' }
    ]

    const typePayments = [{ type: 'direct', img: ImagePayment1, title: 'Thanh toán khi nhận hàng', describe: 'Thanh toán khi nhận hàng' },
        { type: 'card', img: ImagePayment2, title: 'Thẻ tín dụng/Thẻ ghi nợ', describe: 'Chọn để thêm thẻ' }
    ]

    const [typePayment, setTypePayment] = useState('')
    const [typeLocation, setTypeLocation] = useState('office')
    const [btnSubmit, setbtnSubmit] = useState(false)

    const [listInfoBuyers, setListInfoBuyers] = useState([])
    const [infoBuyers, setInfoBuyers] = useState({})

    const handleSaveInfoBuyer = (e) => {
        e.preventDefault()

        const name = nameRef.current.value
        const numberPhone = phoneNumberRef.current.value
        const deliveryAddress = deliveryAddressRef.current.value
        const city = cityRef.current.value
        const district = districtRef.current.value
        const ward = wardRef.current.value



        if (name === "" || numberPhone === "" || deliveryAddress === "" ||
            city === "" || district === "" || ward === "" || typeLocation === "") {
            alert("thông tin chưa đầy đủ")
        } else {
            const infobuyer = {
                name: name,
                numberPhone: numberPhone,
                deliveryAddress: deliveryAddress,
                city: city,
                district: district,
                ward: ward,
                location: typeLocation
            }
            alert("Lưu thông tin thành công")
            setInfoBuyers(infobuyer)
            setbtnSubmit(true)

        }

    }

    const handleOrder = () => {
        if (typePayment === "") {
            alert("Bạn chưa chọn phương thức thanh toán")
        } else {
            setListInfoBuyers([...listInfoBuyers, { infoBuyers, typePayment, totalPrice }])
            alert("Đặt hàng thành công")
            handleClearCart()
            navigate('/')
        }
    }



    return ( 
        <div className = "checkout">
        <div className = "checkout__header">
        <div className = "checkout__header-content grid wide col c-12">
        <Link to = "/"
        className = "checkout__header-logo">
        <img src = { ImageIcon }
        alt = "icon shop"
        className = "checkout__header-logo-icon" />
        <p style = {
            { color: 'blue' } }
        className = "checkout__header-logo-text" > Sport </p> 
        </Link> 
        <div className = "checkout__header-title">
        <p className = "checkout__header-title"> Thanh toán </p> 
        </div> 
        </div> 
        </div> 
        <div className = "checkout__content grid wide row col c-12">
        <div className = "checkout__content-left col c-8">
        <h3> Thông tin giao hàng </h3> 
        <div className = "checkout__info-buyer-content row col c-12">
        <div className = "checkout__info-buyer col c-6">
        <div className = "form__input-info-buyer" >
        <label> Họ tên </label> 
        <input type = "text"
        name = "name"
        ref = { nameRef }
        className = "checkout__info-buyer-input"
        placeholder = "Họ tên" />
        </div> 
        <div className = "form__input-info-buyer">
        <label> Số điện thoại </label> 
        <input type = "text"
        name = "phoneNumber"
        ref = { phoneNumberRef }
        className = "checkout__info-buyer-input"
        placeholder = "Vui lòng nhập số điện thoại của bạn" />
        </div> 
        </div>                         
        <div className = "checkout__info-buyer col c-6">
        <div className = "form__input-info-buyer" >
        <label > Địa chỉ nhận hàng </label> 
        <input type = "text"
        name = "deliveryAddress"
        ref = { deliveryAddressRef }
        className = "checkout__info-buyer-input"
        placeholder = "Vui lòng nhập địa chỉ của bạn" />
        </div> 
        <div className = "form__input-info-buyer" >
        <label> Tỉnh / Thành phố </label> 
        <input type = "text"
        name = "city"
        ref = { cityRef }
        className = "checkout__info-buyer-input"
        placeholder = "vui lòng nhập tỉnh/thành phố" />
        </div> 
        <div className = "form__input-info-buyer" >
        <label> Quận / Huyện </label> 
        <input type = "text"
        name = "district"
        ref = { districtRef }
        className = "checkout__info-buyer-input"
        placeholder = "vui lòng nhập quận/huyện" />
        </div> 
        <div className = "form__input-info-buyer">
        <label> Phường / Xã </label> 
        <input type = "text"
        name = "ward"
        ref = { wardRef }
        className = "checkout__info-buyer-input"
        placeholder = "vui lòng nhập phường/xã" />
        </div> 
        <div className = "checkout__info-buyer-location">
        <p> Lựa chọn tên cho địa chỉ thường dùng </p> 
        <div className = "checkout__info-buyer-location-select"> 
        {
            tabLocation.map(location => ( 
                <button className = "checkout__info-buyer-location-btn"
                key = { location.tab }
                style = {
                    typeLocation === location.tab ? {
                        color: 'blue',
                        border: '1px solid blue'
                    } : {}
                }
                onClick = {
                    () => setTypeLocation(location.tab) } > { location.title } </button>
            ))
        } 
        </div> 
        </div> 
        <div className = "checkout__info-save-buyer">
        <button onClick = { handleSaveInfoBuyer }
        className = "check__info-save-buyer-btn" > LƯU </button> 
        </div> 
        </div> 
        </div> 
        </div> 
        <div className = "checkout__content-right col c-4">
        <div className = "checkout__content-payment">
        <div className = "checkout__content-payment-title">
        <h3> Chọn phương thức thanh toán </h3> 
        <p> Xem tất cả </p> 
        </div>

        {
            typePayments.map((payment) => ( 
                <div key = { payment.type }
                className = "checkout__content-payment-method">
                <div className = "checkout__content-payment-method-container" >
                <div className = "checkout__content-payment-method-describe" >
                <img src = { payment.img }
                className = "checkout__content-payment-method-img" alt='sfasfsf'/>
                <p> { payment.title } </p> 
                </div> 
                <input type = "radio"
                checked = { typePayment === payment.type }
                onChange = {
                    () => setTypePayment(payment.type) }
                className = "checkout__content-payment-method select" />
                </div> 
                <span> { payment.describe } </span> 
                </div>
            ))
        }

        <div className = "checkout__content-payment-down">
        <h3> Mã giảm giá </h3> 
        <div className = "checkout__content-payment-down-price">
        <input className = "checkout__content-payment-down-input"
        type = "text"
        placeholder = "Nhập mã giảm giá (mã chỉ áp dụng 1 lần)" />
        <button className = "checkout__content-payment-down-btn"> ÁP DỤNG </button> 
        </div> 
        </div> 
        <div className = "checkout__content-payment-info-order">
        <h3> Thông tin đơn hàng </h3> 
        <div className = "total-info-order info-order-temporary">
        <p> Tạm tính({ cartItem.reduce((numberProduct, item) => numberProduct + item.quantity, 0) }) sản phẩm </p> 
        <p> { totalPrice } đ </p> 
        </div> 
        <div className = "total-info-order info-delivery-charges">
        <p> Phí giao hàng </p> 
        <p> { Math.floor(totalPrice * 0.05)} đ </p> 
        </div> 
        <div className = "total-info-order info-total-price">
        <p> Tổng cộng: </p> 
        <p> { Math.floor(totalPrice + totalPrice * 0.05)} đ </p> 
        </div> {
            btnSubmit === true && ( 
                <button onClick = { handleOrder }
                className = "btn-order" >
                ĐẶT HÀNG </button>
            )
        } 
        </div> 
        </div>
        </div>
        </div>

        <div>
        <IconTelephone />
        </div>

        <div>
        <Footer /> 
        </div> 
        </div>
    )
}

export default Checkout