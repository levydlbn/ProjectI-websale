import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import ReactLoading from 'react-loading'

import Loading from './Loading'
import Loading1 from './loading/Loading1'

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
    handleTypeSortProduct,
    tabProducts,
    typeProduct,
    listSort,
    typeSortProduct,
    typeSortPrice,
    listSortPrice,
    handleSortPriceProduct,
    currentProduct,
    textSearchProductRef,
    isLoading,
    isLoadingTypeProduct,
    isLoadingProduct
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


    const displayProducts = currentProduct.slice(pagesVisited, pagesVisited + productsPerPage).map(product => ( 
        <div key = { product.id } className = "content__product-item col c-25" >
        <div className = "content__product-item-container">
        <Link to = { `/product/${product.id}` }
        style = {
            { margin: 0 }
        }>
        <img src = { product.thum }
        alt = { product.name }
        className = "product__img" / >
        </Link>

        <div className = "product__info" >
        <div className = "product__info-describe" > { product.describe } 
        </div> 
        <div className = "product__info-price-origin" >
        <p className = "product__info-price" > Giá: { product.price } đ </p>
        <button onClick = {
            () => handleAddProduct(product)
        }
        className = "btn btn-add-to-cart" > <FaCartPlus /> </button>  
        </div> 
        </div>
        </div> 
        </div>
    ))


    const pageCount = Math.ceil(currentProduct.length / productsPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }


    return (

        <div className = "content" > 
                <div className = "grid wide" >
                <div className = "content__header col c-12" >
                <div className = "content__header-image" >
                <img src = { imgHeader }
                 alt = "Image heading"
                  className = "content__header-image-item" / >
            </div>
            </div >

            <div className = "main__content" >
            <div className = "content__sidebar col c-2" >
            <div className = "content__sidebar-title" >
            <div className = "content__sidebar-title-icon" > <FaList /> </div> 
            <p className = "content__sidebar-title-text" > Danh mục sản phẩm </p> 
            </div> 
            <div className = "content__sidebar-list" > {
                tabProducts.map(tabProduct => ( 
                    <nav className = "content__sidebar-item"
                    key = { tabProduct.tab }
                    style = {
                        typeProduct === tabProduct.tab ? {
                            backgroundColor: '#a4affa'
                        } : {}
                    }
                    onClick = {
                        () => handleTypeProduct(tabProduct.tab)
                    } >
                    <p className = "content__sidebar-item-text"
                    style = {
                        { fontSize: 14, marginLeft: 10 }
                    } > { tabProduct.title } </p>
                     <span> </span> 
                     </nav>
                ))
            }

            </div> 
            </div> 
            <div className = "content__product col c-10" >
            <div className = "content__product-control" >
            <div className = "content__product-control-sort" >
            <p className = "content__product-control-title" > Sắp xếp theo </p> 
            {listSort.map(item => (
                  <button className = "btn btn-sort" 
                          style = {
                              typeSortProduct === item.type ? {
                                  backgroundColor: '#4848fc',
                                  color: 'white'
                              } : {}
                          }
                          onClick={
                              () => handleTypeSortProduct(item.type)
                          }                     
                  > {item.title} </button> 
            ))}
            <div className='content__sort-price-product'>
               <div className = "content__product-control-price">
                  <p className = "content__product-control-price-title" > {typeSortPrice} </p> 
                  <div className = "content__product-control-price-icon" > <FaChevronDown /> </div> 
               </div>
               
               <div className='conten__product-control-price-list'>
                  {listSortPrice.map(item => (
                      <div className='conten__product-control-price-item'
                           style={
                               typeSortPrice === item.title ? {
                                   color: 'red'
                               } : {}
                           }
                           onClick={() => handleSortPriceProduct(item.type)}
                           >
                         {item.title}
                      </div>
                   ))}
               </div>
            </div> 
            </div>                           
            </div> {
                isLoadingProduct === true ?
                <Loading1 /> : <div>
                 <div className = "content__product-container row" > { displayProducts } </div>
            <div>
            <ReactPaginate
            previousLabel = { <FaAngleLeft /> }
            nextLabel = { <FaAngleRight /> }
            pageCount = { pageCount }
            onPageChange = { changePage }
            containerClassName = { "paginationBttns" }
            previousLinkClassName = { "previousBttn" }
            nextLinkClassName = { "nextBttn" }
            disabledClassName = { "paginationDisabled" }
            activeClassName = { "paginationActive" }
            /> 
            </div> 
                </div>
            } 
            </div> 
            </div> 
            </div>
        
        </div>
    )
}

export default Content