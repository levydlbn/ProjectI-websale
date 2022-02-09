import React, { useRef, useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import '../../static/css/base.css'
import '../../static/css/signup.css'

import ImageIcon from "../../static/image/shop-icon.png"
// import firebaseConfig from "../../firebase/firebase";
import Footer from '../Footer';
import IconTelephone from '../IconTelephone';
import Loading from '../Loading';


const Login = ({ listUser, handleLogin, handleLoading }) => {

    const emailRef = useRef()
    const passwordRef = useRef()

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1600)
    })


    return ( 
        <div>
            {isLoading === true ? <Loading /> :
    <div className = "signup__page">
        <div className = "signup__page-header">
        <div>
        <Link to = "/"
        className = "signup__page-header-logo"
        onClick={() => handleLoading()}>
        <img src = { ImageIcon }
        alt = "icon shop"
        className = "signup__page-header-logo-icon" />
        <p style = {
            { color: 'blue' } }
        className = "signup__page-header-logo-text"> Sport </p> 
        </Link>
        </div> 
        <div className = "signup__page-header-title">
        <p className = "signup__page-header-title"> Đăng nhập </p> 
        </div> 
        </div>


        <div className = "signup__page-content">
        <div className = "signup__page-container">
        <div className = "signup__page-content-left">
        <div className = "signup__page-logo">
        <img src = { ImageIcon }
        alt = "icon shop"
        className = "signup__page-logo-icon" />
        <span className = "signup__page-logo-tilte"> Sport </span> 
        </div> 
        <div>
        <p className = "signup__page-introduc"> Shop đồ thể thao được yêu thích ở Đông Nam Á </p> 
        </div>
        </div> 
        <div className = "signup__page-content-right">
        <div className = "auth__form-container"
        style = {
            {
                width: 400,
                height: 380,
            }
        }>
        <div className = "auth__form-content">
        <div className = "auth__form-container-title">
        <p className = "auth__form-content-title"> Đăng nhập </p> 
        </div>
        <form className = "auth__form-group auth__form-group-login">
        <input type = "text"
        name = "email"
        ref = { emailRef }
        className = "auth__form-input"
        placeholder = "Email" />
        </form> 
        <form className = "auth__form-group auth__form-group-login">
        <input type = "password"
        name = "password"
        ref = { passwordRef }
        className = "auth__form-input"
        placeholder = "Password" />
        </form>  

        <div className = "auth__form-group" >
        <button onClick = {
            () => handleLogin(emailRef.current.value, passwordRef.current.value) }
        className = "btn btn-signup"> Đăng nhập </button> 
        </div>

        <div className = "auth__form-group auth__form-group-info-account">
        <p className = "auth__form-info-account" > Bạn chưa có tài khoản ? </p> 
        <Link to = "/user/signup"
        className = "auth__form-info-login" > Đăng ký </Link> 
        </div> 
        </div> 
        </div> 
        </div> 
        </div> 
        </div>

        <div >
        <IconTelephone />
        </div>

        <div>
        <Footer />
        </div> 
        </div>
            }
        </div>
    )
}

export default Login