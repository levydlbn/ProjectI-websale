import React, { useRef } from "react"

import { useNavigate } from "react-router-dom"

import { Alert } from '@mui/material'

import '../../static/css/loginAdmin.css'
import '../../static/css/base.css'

const LoginAdmin = () => {

    const userAdminRef = useRef()
    const passwordAdminRef = useRef()
    const navigate = useNavigate()

    const handleLoginAdmin = () => {
        if (userAdminRef.current.value === "" || passwordAdminRef.current.value === "") {
            alert("admin or password not be empty ")
        } else if (userAdminRef.current.value === "levanvy" && passwordAdminRef.current.value === "125971157") {
            navigate("/admin/manager")
        } else {
            alert("Account no exits")
        }
    }

    return ( <
        div className = "admin_login grid wide" >

        <
        div className = "admin_login-content" >

        <
        div className = "admin_login-group-form" >
        <
        div className = "admin_login-header" >
        <
        h2 > Tài khoản < /h2> <
        p > ADMIN < /p> <
        /div> <
        div >
        <
        input type = "text"
        className = "admin_login-form-input"
        name = "userAdmin"
        ref = { userAdminRef }
        placeholder = "Admin" / >
        <
        /div> <
        div >
        <
        input type = "password"
        className = "admin_login-form-input"
        name = "passwordAdmin"
        ref = { passwordAdminRef }
        placeholder = "Password" / >
        <
        /div> <
        div >
        <
        button className = "admin_login-btn"
        onClick = { handleLoginAdmin } > Đăng nhập < /button> <
        /div> <
        /div> <
        /div> <
        /div>
    )
}

export default LoginAdmin