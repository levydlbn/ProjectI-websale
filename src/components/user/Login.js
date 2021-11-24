import React, { useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";

import '../../static/css/base.css'
import '../../static/css/signup.css'

import ImageIcon from "../../static/image/shop-icon.png"
// import firebaseConfig from "../../firebase/firebase";
import { useAuth } from "../../auth/AuthContext";
import Footer from '../Footer';

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    let navigate = useNavigate()

    const { login } = useAuth

    const handleLogin = async(e) => {
        e.preventDefault()

        try {
            await login(emailRef.current.value, passwordRef.current.value)

        } catch {
            console.log("Failed to log in ")
        }

        navigate('/')
    }

    return ( <
        div className = "signup__page" >
        <
        div className = "signup__page-header" >
        <
        div >
        <
        Link to = "/"
        className = "signup__page-header-logo" >
        <
        img src = { ImageIcon }
        alt = "icon shop"
        className = "signup__page-header-logo-icon" / >
        <
        p style = {
            { color: 'blue' } }
        className = "signup__page-header-logo-text" > Sport < /p> <
        /Link> <
        /div> <
        div className = "signup__page-header-title" >
        <
        p className = "signup__page-header-title" > Đăng nhập < /p> <
        /div> <
        /div>


        <
        div className = "signup__page-content" >
        <
        div className = "signup__page-container" >
        <
        div className = "signup__page-content-left" >
        <
        div className = "signup__page-logo" >
        <
        img src = { ImageIcon }
        alt = "icon shop"
        className = "signup__page-logo-icon" / >
        <
        span className = "signup__page-logo-tilte" > Sport < /span> <
        /div> <
        div >
        <
        p className = "signup__page-introduc" > Nền tảng thương mại điện tử được yêu thích ở Đông Nam Á < /p> <
        /div> <
        /div> <
        div className = "signup__page-content-right" >
        <
        div className = "auth__form-container"
        style = {
            {
                width: 400,
                height: 380,
            }
        } >
        <
        div className = "auth__form-content" >
        <
        div className = "auth__form-container-title" >
        <
        p className = "auth__form-content-title" > Đăng nhập < /p> <
        /div> <
        form className = "auth__form-group auth__form-group-login" >
        <
        input type = "text"
        name = "email"
        ref = { emailRef }
        className = "auth__form-input"
        placeholder = "Email" /
        >
        <
        /form> <
        form className = "auth__form-group auth__form-group-login" >
        <
        input type = "password"
        name = "password"
        ref = { passwordRef }
        className = "auth__form-input"
        placeholder = "Password" /
        >
        <
        /form>

        <
        div className = "auth__form-group" >
        <
        button onClick = { handleLogin }
        className = "btn btn-signup" > Đăng nhập < /button> <
        /div>

        <
        div className = "auth__form-group auth__form-group-info-account" >
        <
        p className = "auth__form-info-account" > Bạn chưa có tài khoản ? < /p> <
        Link to = "/user/signup"
        className = "auth__form-info-login" > Đăng ký < /Link> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>

        <
        div >
        <
        Footer / >
        <
        /div> <
        /div>
    )
}

export default Login