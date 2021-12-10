import React from 'react'

import { FaUserLock, FaBell, FaCog, FaGlobe } from 'react-icons/fa'
import IconShop from '../../../static/image/shop-icon.png'
import '../css/topbar.css'

const Topbar = () => {
    return ( <
        div className = "topbar" >
        <
        div className = "grid wide" >
        <
        div className = "topbar__content" >
        <
        div className = "topbar__content-left" >
        <
        img src = { IconShop }
        className = "topbar__iconShop" / >
        <
        span > SPORT < /span> <
        /div> <
        div className = "topbar__content-right" >
        <
        div className = "topbar__iconContainer" >
        <
        FaUserLock style = {
            { fontSize: 22 } }
        /> <
        span className = "admin_name" > Le van vy < /span> <
        /div> <
        div className = "topbar__iconContainer" >
        <
        FaBell / >
        <
        span className = "topbar__iconBadge" > 2 < /span> <
        /div> <
        div className = "topbar__iconContainer" >
        <
        FaGlobe / >
        <
        span className = "topbar__iconBadge" > 2 < /span> <
        /div> <
        div className = "topbar__iconContainer" >
        <
        FaCog / >
        <
        /div>

        <
        /div> <
        /div> <
        /div> <
        /div>
    )
}

export default Topbar