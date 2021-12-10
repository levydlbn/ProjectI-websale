import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { FaHome, FaShoppingBag, FaAddressBook, FaUserPlus, FaProductHunt, FaShoppingCart, FaCogs, FaNewspaper } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'

import '../css/sidebar.css'


const Sidebar = () => {

    const sidebarItem = [{ icon: < FaShoppingBag / > , title: "Bán hàng/Thu ngân", namePage: "sale" },
        { icon: < BsGraphUp / > , title: "Thống kê", namePage: "analysis" },
        { icon: < FaAddressBook / > , title: "Khách hàng", namePage: "customer" },
        { icon: < FaShoppingCart / > , title: "Đơn hàng", namePage: "order" },
        { icon: < FaProductHunt / > , title: "Sản phẩm", namePage: "product" },
        { icon: < FaUserPlus / > , title: "Cộng tác viên", namePage: "collaborators" },
        { icon: < FaNewspaper / > , title: "Tin tức", namePage: "news" },
        { icon: < FaCogs / > , title: "Cấu hình", namePage: "setting" },
    ]

    const [pageCurrent, setPageCurrent] = useState("")
    const handleClick = (item) => {
        setPageCurrent(item.namePage)
    }

    const handleClickHeader = () => {
        setPageCurrent('')
    }

    return ( <
        div className = "sidebar" >
        <
        div onClick = { handleClickHeader }
        className = "sidebar__header" >
        <
        FaHome style = {
            { fontSize: 26 } }
        /> <
        Link to = "/admin/manager" >
        <
        h3 className = "sidebar__title" > Thể thao - Shop Sport < /h3> <
        /Link> <
        /div> <
        div className = "sidebar__list" > {
            sidebarItem.map((item) => ( <
                nav key = { item.namePage }
                style = {
                    pageCurrent === item.namePage ? {
                        backgroundColor: 'rgb(233, 233, 233)',
                        borderLeft: '4px solid rgb(55, 55, 55)',
                    } : {}
                }
                onClick = {
                    () => handleClick(item) }
                className = "sidebar__list-item" >
                <
                Link to = { `/admin/manager/${item.namePage}` }
                className = "sidebar__list-item-content" >
                <
                div className = "sidebar__list-item-icon" > { item.icon } < /div> <
                span className = "sidebar__list-item-title" > { item.title } < /span> <
                /Link> <
                /nav>
            ))
        } <
        /div> <
        /div>
    )
}

export default Sidebar