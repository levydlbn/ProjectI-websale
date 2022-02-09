import React, {useState, useEffect} from 'react'
import Header from '../Header'
import { useNavigate } from 'react-router-dom'

import '../../static/css/base.css'
import '../../static/css/cart.css'

import { AiOutlineDelete, AiOutlineHeart } from "react-icons/ai"
import Footer from '../Footer'
import IconTelephone from '../IconTelephone'
import Loading2 from '../loading/Loading2'

const Cart = ({ cartItem, handleAddProduct, handleRemoveProduct, handleRemoveOneCategory, handleClearCart, nowUser }) => {

    const totalPrice = cartItem.reduce((price, item) => price + item.quantity * item.price, 0)
        // còn xóa tất cả 
    const navigate = useNavigate()

    const [isLoadingCart, setIsLoadingCart] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoadingCart(false)
        }, 2000)
    })

    const handleCartConfirmation = () => {
        navigate('/user/checkout')
    }

    return ( 
        <div>
            {isLoadingCart === true ? <Loading2 /> :
        <div>
        <Header cartItem = { cartItem }
        nowUser = { nowUser }/> 
        <div className = "cart-content grid wide">
        <div className = "cart col row c-12">
        <div className = "cart__item-left col c-8">
        <div className = "cart__item-header">
        <div className = "cart__item-header-left">
        <input type = "checkbox"
        className = "cart__item-header-select" />
        <p className = "cart__item-header-text" > CHỌN TẤT CẢ({ cartItem.length }) SẢN PHẨM </p>
         </div> 
         <div className = "cart__item-header-right">
        <div className = "cart__item-header-clear-cart"> {
            cartItem.length >= 1 && ( 
                <button className = "clear-cart-btn"
                onClick = { handleClearCart }>
                <AiOutlineDelete style = {
                    { fontSize: 20, marginRight: 3 }}/>
                    Xóa tất cả 
                </button>
            )
        } 
        </div>

        </div> 
        </div>

        {
            cartItem.length === 0 && ( 
                <div className = "cart__item-empty"> Không có sản phẩm!!! </div>
            )
        }

        <div > 
        {
            cartItem.map((item) => ( 
                <div key = { item.id }
                className = "cart__item-list">
                <div className = "cart__item-list-left">
                <input type = "checkbox"
                className = "cart__item-select" />
                <img className = "cart__item-image"
                    src = { item.thum }
                    alt = { item.name } /> 
                <div className = "cart__item-describe">
                <p> { item.describe } </p> 
                </div> 
                </div> 
                <div className = "cart__item-list-right">
                <div className = "cart__item-price" >
                <p> { item.price } đ </p> 
                <div className = "cart__item-price-icon">
                <AiOutlineHeart />
                <div className = "cart__item-price-icon-delete"
                    onClick = {() => handleRemoveOneCategory(item) }> <AiOutlineDelete /> </div> 
                </div> 
                </div> 
                <div className = "cart__item-control-quantity">
                <button onClick = {
                    () => handleRemoveProduct(item) }
                     className = "cart__item-control-btn" > - </button> 
                     <p> { item.quantity } </p> 
                     <button onClick = {
                    () => handleAddProduct(item) }
                className = "cart__item-control-btn"> + </button> 
                </div> 
                </div> 
                </div>
            ))
        } 
        </div> 
        </div> 
        <div className = "cart__item-right col c-4">
        <h2> Thông tin đơn hàng </h2> 
        <div className = "price-total-product-temporary">
        <p className = "price-info" > Tạm tính({ cartItem.reduce((products, item) => products + item.quantity, 0) }) sản phẩm </p> 
        <div> { totalPrice } đ </div> 
        </div> 
        <div className = "price-delivery-charges">
        <p className = "price-info" > Phí giao hàng </p> 
        <div> { Math.floor(totalPrice * 0.05) } đ </div> 
        </div> 
        <div className = "price-total" >
        <p className = "price-info" > Tổng cộng </p> 
        <div className = "price-info-right"> 
            { Math.floor(totalPrice + totalPrice * 0.05)} đ
            <p> Đã bao gồm VAT(nếu có) </p> 
        </div> 
        </div> 
        {
            cartItem.length >= 1 && ( 
                <button onClick = { handleCartConfirmation }
                className = "btn-cart-confirmation">
                XÁC NHẬN GIỎ HÀNG 
                </button>
            )
        } 
        </div>

        </div>

        <div>
        <IconTelephone />
        </div>

        </div> 
        <Footer />
        </div>
            }
        </div>
    )
}

export default Cart