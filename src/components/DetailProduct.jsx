import React, { useState } from 'react'

import Header from './Header'
import Footer from './Footer'

import { Link, useParams } from 'react-router-dom'

import '../static/css/base.css'
import '../static/css/detailProduct.css'

import IconTransport from "../static/image/imgbin-computer-icons-delivery-logistics-freight-transport-shipping-delivery-truck-hBt8VJakFPANwaBM3QBY4zJ2R.jpg"
import IconShop from "../static/image/shop-icon.png"
import { FaCartPlus } from 'react-icons/fa'
import IconTelephone from './IconTelephone'


const DetailProduct = ({ cartItem, nowUser, listProducts, getProductById, handleAddProduct, handleRemoveProduct, handleAddProduct2 }) => {

        const { id } = useParams()

        const productExits = listProducts.find((product) => product.id === id)
        const [product, setProduct] = useState(productExits)

        const [numberProduct, setNumberProduct] = useState(1)

        console.log(id, product)

        const handleAddNumberProduct = () => {
            setNumberProduct(numberProduct + 1)
        }

        const handleRemoveNumberProduct = () => {
            if (numberProduct > 1) {
                setNumberProduct(numberProduct - 1)
            }
        }

        return ( 
            <div >
            <div >
            <Header cartItem = { cartItem }
            nowUser = { nowUser }
            />    
            </div> 
            <div className = "grid wide row " >
            <div className = "detail__product-content col c-12" >
            <div className = "detail__product-content-left col c-5" >
            <div className = "detail__product-image" >
            <img src = { product.thum }
            alt = "ảnh áo đá bóng"
            className = "detail__product-image-primary" />
            </div>    
            </div> 
            <div className = "detail__product-content-right col c-7" >
            <div className = "detail__product-content-title" > { product.describe } </div>    
            <p className = "detail__product-content-price" > Giá: { product.price } đ </p>    
            <div className = "detail__product-content-right-item one" >
            <img src = { IconShop }
            className = "detail__product-content-right-label"
            alt = 'sdfdsfdsf' />

            <div className = "detail__product-content-introduct" >
            <h4 > Gì cũng Rẻ </h4>    
            <span > Giá tốt nhất so với các sản phẩm cùng loại trên thị trường </span> 
            </div>

            </div>      
            <div className = "detail__product-content-right-item" >
            <p className = "detail__product-info" > Vận chuyển: </p>   
            <div className = "detail__product-content-item-transport" >
            <img src = { IconTransport }
            className = "detail__product-content-icon-transport" />
            <div >
            <h4 > Miễn phí vận chuyển </h4>    
            <span> Miễn phí vận chuyển cho đơn hàng trên 300.000 đ </span>  
            </div> 
            </div>     
            </div> 
            <div className = "detail__product-content-right-item" >
             {
                product.category === "balls" ?
                <div className = "detail__product-content-right-item" >
                <p className = "detail__product-info" > SIZE : </p>  <div> 5 </div>
                    </div> :     
                <div className = "detail__product-content-right-item" >
                <p className = "detail__product-info" > SIZE: </p>   <div> M </div>
                    </div> }   
                    </div> 
                    <div className = "detail__product-content-right-item" >
                    <p className = "detail__product-info" > Số lượng: </p>     
                <div className = "cart__item-control-quantity" >
                <button onClick = { handleRemoveNumberProduct }
                className = "cart__item-control-btn" > - </button>    
                 <p> { numberProduct } </p>    
                 <button onClick = { handleAddNumberProduct }
                className = "cart__item-control-btn" > + </button>     
                </div> </div>     
                <div className = "detail__product-content-right-item" >
                <div className = "detail__product-content-btn" >
                <button
                 onClick = {
                    () => handleAddProduct2(product)
                }
                className = "detail__product-content-btn-add-to-cart" >
                <FaCartPlus style = {
                    { marginRight: 10 }
                }
                /> Thêm vào giỏ hàng   
                </button> 
                <Link to = "/user/CartProduct" >
                <button onClick = {
                    () => handleAddProduct2(product)
                }
                className = "detail__product-content-btn-buy" > Mua ngay </button>     
                </Link> 
                </div>

                </div>     
                </div> 
                </div>     
                </div>

                <div >
                <IconTelephone />
                </div>

                <div >
                <Footer />
                </div>    
                </div>

            )
        }

        export default DetailProduct