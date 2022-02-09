import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

import { Link } from 'react-router-dom'

import { FaChevronDown, FaList, FaCartPlus, FaAngleLeft, FaAngleRight } from 'react-icons/fa'


import './css/productManager.css'

const ProductManager = ({ listProducts }) => {

    const [pageNumber, setPageNumber] = useState(0)

    const productsPerPage = 10
    const pagesVisited = pageNumber * productsPerPage

    const displayProductsManager = listProducts.slice(pagesVisited, pagesVisited + productsPerPage).map(product => ( 
        <div key = { product.id }
          className = 'productManager-item row c-12' >
        <div className = 'productManager__item-id col c-1' > { product.id } </div>  
        <div className = 'productManager__item-describe col c-4' >
        <img src = { product.thum }
        alt = 'sfdsf'
        className = 'productManager-item-img' />
        <span className = 'productManager-item-text' > { product.describe } </span>  
        </div> 
        <div className = 'productManager__item-category col c-1' > { product.category } </div>
        <div className = 'productManager__item-number col c-1' > 999 </div>  
        <div className = 'productManager__item-price col c-1' > { product.price }
        đ </div>  
        <div className = 'productManager__item-status col c-2' > Còn Hàng </div>  
        <div className = 'productManager__item-action col c-2'>
        <button className = 'productManager__item-action-edit' > Sửa </button>  
        <button className = 'productManager__item-action-delete' > Xóa </button> 
        </div>
        </div>
    ))

    const pageCount = Math.ceil(listProducts.length / productsPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return ( 
        <div className = 'productManager' >
        <div className = 'productManager__header row c-12' >
        <p className = 'productManager__header-id col c-1' > ID </p>  
        <p className = 'productManager__header-describe col c-4' > SẢN PHẨM </p>  
        <p className = 'productManager__header-category col c-1' > THỂ LOẠI </p> 
        <p className = 'productManager__header-number col c-1' > SỐ LƯỢNG </p>  
        <p className = 'productManager__header-price col c-1' > GÍA </p>  
        <p className = 'productManager__header-status col c-2' > TRẠNG THÁI </p>  
        <p className = 'productManager__header-action col c-2' > SỬA / XÓA </p>  
        </div>  <div> { displayProductsManager } </div>  
        <div>
        <ReactPaginate previousLabel = { <FaAngleLeft /> }
        nextLabel = { <FaAngleRight /> }
        pageCount = { pageCount }
        onPageChange = { changePage }
        containerClassName = { "paginationBttn" }
        previousLinkClassName = { "previousBttn" }
        nextLinkClassName = { "nextBttn" }
        disabledClassName = { "paginationDisabled" }
        activeClassName = { "paginationActives" }
        />  </div>                 
        </div>
    )
}

export default ProductManager