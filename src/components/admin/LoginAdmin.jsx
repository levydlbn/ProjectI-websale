import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../static/css/loginAdmin.css'

import IconUser from '../../static/image/Changing-the-default-admin-user-in-WordPress1-460x575.jpg'

const LoginAdmin = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    const handleLoginAdmin = (email, password) => {
        if (email === '' || password === '') {
            alert('Hãy điền đầy đủ thông tin đăng nhập')
        } else if (email === 'levanvy@gmail.com' && password === '125971157') {
            navigate('/admin/manager')
        } else {
            alert('Thông tin tài khoản không đúng hãy đăng nhập lại')
        }
    }

    return ( 
        <div className = 'loginAdmin' >
        <div className = 'loginAdmin__container' >
        <div className = 'loginAdmin__left' >
        <img src = { IconUser }
        className = 'loginAdmin__left-img'
        alt = 'adsfasdf' />
        </div> 
        <div className = 'loginAdmim__right' >
        <div className = 'loginAdmin__formGroup' >
        <h2 > Tài Khoản </h2> 
        <input type = 'text'
        className = 'loginAdmin__formGroup-input'
        ref = { emailRef }
        placeholder = 'Email' />
        <input type = 'password'
        className = 'loginAdmin__formGroup-input'
        ref = { passwordRef }
        placeholder = 'Password' />
        <button className = 'btn-login'
        onClick = {
            () => handleLoginAdmin(emailRef.current.value, passwordRef.current.value) } >
        Đăng nhâp </button> <p > Nếu không phải chủ trang web </p> 
        <p > Đừng cố gắng đăng nhập sẽ có người đến và bắt bạn </p> 
        </div> 
        </div> 
        </div> 
        </div>
    )
}

export default LoginAdmin