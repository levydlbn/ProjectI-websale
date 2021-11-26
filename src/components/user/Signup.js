import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import '../../static/css/base.css'
import '../../static/css/signup.css'

import ImageIcon from "../../static/image/shop-icon.png"
// import firebaseConfig from "../../firebase/firebase";
import { useAuth } from "../../auth/AuthContext";

import Footer from "../Footer";

// import Footer from "../Footer";

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const navigate = useNavigate()
        // const [error, setError] = useState('')
        // const [loading, setLoading] = useState(false)


    const handleSignup = async(e) => {
            e.preventDefault()

            if (passwordRef.current.value !== passwordConfirmRef.current.value) {
                console.log('Passwords do not match')
            }

            try {
                await signup(emailRef.current.value, passwordRef.current.value)

            } catch {
                console.log('fail')
            }

            navigate('/user/login')

        }
        // const [currentUser, setCurrentUser] = useState(null)

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const { email, password } = e.target.elements()
    //     try {
    //         firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value)
    //         setCurrentUser(true)
    //     }catch (error) {
    //         alert(error)
    //     }
    // }

    // if (currentUser) {
    //     return <Route to="/user/login" />
    // }




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
        p className = "signup__page-header-title" > Đăng ký < /p> <
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
        p className = "signup__page-introduc" > Shop đồ thể thao được yêu thích ở Đông Nam Á < /p> <
        /div> <
        /div> <
        div className = "signup__page-content-right" >
        <
        div className = "auth__form-container" >
        <
        div className = "auth__form-content" >
        <
        div className = "auth__form-container-title" >
        <
        p className = "auth__form-content-title" > Đăng ký < /p> <
        /div> <
        form className = "auth__form-group" >
        <
        input type = "text"
        name = "email"
        ref = { emailRef }
        className = "auth__form-input"
        placeholder = "Email" /
        >
        <
        /form> <
        form className = "auth__form-group" >
        <
        input type = "password"
        name = "password"
        ref = { passwordRef }
        className = "auth__form-input"
        placeholder = "Password" /
        >
        <
        /form> <
        form className = "auth__form-group" >
        <
        input type = "password"
        name = "passwordConfirm"
        ref = { passwordConfirmRef }
        className = "auth__form-input"
        placeholder = "Password confirm" /
        >
        <
        /form> <
        div className = "auth__form-group" >
        <
        button onClick = { handleSignup }
        className = "btn btn-signup" > Đăng ký < /button> <
        /div> <
        div className = "auth__form-group auth__form-group-text" >
        <
        p className = "auth__form-text" > Bằng việc đăng ký, bạn đã đồng ý với Sport về < /p> <
        nav className = "auth__form-group-link" >
        <
        Link to = "/vervice"
        className = " auth__form-text auth__form-text-link " > Điều khoản dịch vụ < /Link> <
        p className = "auth__form-text" > & < /p> <
        Link to = "/auth"
        className = "auth__form-text auth__form-text-link" > Chính sách bảo mật < /Link> <
        /nav> <
        /div> <
        div className = "auth__form-group auth__form-group-info-account" >
        <
        p className = "auth__form-info-account" > Bạn đã có tài khoản ? < /p> <
        Link to = "/user/login"
        className = "auth__form-info-login" > Đăng nhập < /Link> <
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

export default Signup