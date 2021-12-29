import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading'
import AuthProvider from './auth/AuthContext';
import Admin from './components/admin/Admin';
import LoginAdmin from './components/admin/LoginAdmin.jsx';
import DetailProduct from './components/DetailProduct';
import Cart from './components/user/Cart';
import Checkout from './components/user/Checkout';
// import './App.css'
import Login from './components/user/Login';
import Signup from './components/user/Signup';
// import Signup from './components/user/Signup';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import Footer from './components/Footer'
// import NotFound from './pages/NotFound';
// import './App.css';

// lazy load - Code splitting
// const Home = React.lazy(() => import('./pages/Home'));
const tabProducts = [{ tab: 'full', title: 'TẤT CẢ SẢN PHẨM' },
    { tab: 'clothes', title: 'Quần áo bóng đá' },
    { tab: 'shoes', title: 'Giày áo bóng đá' },
    { tab: 'gloves', title: 'Găng tay thủ môn' },
    { tab: 'socks', title: 'Tất bóng đá' },
    { tab: 'balls', title: 'Quả bóng đá' }
]

function App() {



    const [listUser, setListUser] = useState([])
    const [nowUser, setNowUser] = useState({ email: '', password: '' })
    const [listProducts, setListProducts] = useState([])
    const [cartItem, setCartItem] = useState([])
    const textSearchProductRef = useRef()

    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingTypeProduct, setIsLoadingTypeProduct] = useState(true)

    const [currentProduct, setCurrentProduct] = useState(listProducts)
    const [typeProduct, setTypeProduct] = useState("full")

    let loginNavigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:3000/product`)
                .then(res => res.json())
                .then(products => {
                    setListProducts(products)
                    setIsLoading(true)
                })
        }, 2000)
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/user')
            .then(res => res.json())
            .then(users => {
                setListUser(users)
            })
    }, [])

    useEffect(() => {
        if (currentProduct.length === 0) {
            setCurrentProduct(listProducts)
        }
    })

    useEffect(() => {

        if (typeProduct === "full") {
            setCurrentProduct(listProducts)
        } else {
            const categoryProduct = listProducts.filter(product => product.category === typeProduct)
            setCurrentProduct(categoryProduct)
        }

    }, [typeProduct])

    const handleTypeProduct = (tabProduct) => {
        setTypeProduct(tabProduct)
    }



    const handleSearchProduct = (e) => {
        e.preventDefault()
        const infoProductSearch = textSearchProductRef.current.value
        setCurrentProduct(listProducts.filter(product => product.describe.toLowerCase().includes(infoProductSearch.toLowerCase())))
    }

    const handleAddProduct = (product) => {
        const ProductExits = cartItem.find((item) => item.id === product.id)
        if (ProductExits) {
            setCartItem(cartItem.map((item) => item.id === product.id ? {...ProductExits, quantity: ProductExits.quantity + 1 } : item))
        } else {
            setCartItem([...cartItem, {...product, quantity: 1 }])
            alert("Thêm vào giỏ hàng thành công")
        }
    }

    const handleRemoveOneCategory = (products) => {
        setCartItem(cartItem.filter((item) => item.id !== products.id))
    }

    const handleRemoveProduct = (product) => {
        const ProductExits = cartItem.find((item) => item.id === product.id)
        if (ProductExits.quantity === 1) {
            setCartItem(cartItem.filter((item) => item.id !== product.id))
        } else {
            setCartItem(cartItem.map((item) =>
                item.id === product.id ? {...ProductExits, quantity: ProductExits.quantity - 1 } :
                item
            ))
        }
    }

    const getProductById = (id) => {
        listProducts.find((product) => product.id === id)
    }
    const handleClearCart = () => {
        setCartItem([])
    }

    const handleLogin = (email, password) => {
        if (email === "" || password === "") {
            alert("Vui lòng nhập đầy đủ thông tin")
        } else {

            const userExits = listUser.find((item) => item.email === email && item.password === password)

            if (userExits) {
                setNowUser({
                    email: email,
                    password: password
                })
                loginNavigate('/')

            } else {
                alert("Tài khoản chưa tồn tại ^_^ \n Vui lòng đăng ký tài khoản mới")
            }

        }
    }

    const handleLogout = () => {
        setNowUser({
            email: '',
            password: ''
        })
    }


    return ( 
        <AuthProvider>
            <Routes>
            <Route path = "/"
                element = { <Home listProducts = { listProducts }
                cartItem = { cartItem }
                handleAddProduct = { handleAddProduct }
                textSearchProductRef = { textSearchProductRef }
                handleSearchProduct = { handleSearchProduct }
                handleTypeProduct = { handleTypeProduct }
                tabProducts = { tabProducts }
                typeProduct = { typeProduct }
                currentProduct = { currentProduct }
                listUser = { listUser }
                nowUser = { nowUser }
                handleLogout = { handleLogout }
                isLoading = { isLoading }
                isLoadingTypeProduct = { isLoadingTypeProduct } />} />
            <Route path = "/user/signup"
                element = { <Signup /> } /> 
            <Route path = "/user/login"
                element = { <Login listUser = { listUser }
                    handleLogin = { handleLogin } />} />
            <Route path = "/user/CartProduct"
                    element = { <Cart 
                        listProducts = { listProducts }
                        cartItem = { cartItem }
                        handleAddProduct = { handleAddProduct }
                        handleRemoveProduct = { handleRemoveProduct }
                        handleRemoveOneCategory = { handleRemoveOneCategory }
                        handleClearCart = { handleClearCart }
                        nowUser = { nowUser } />} />
            <Route path = "/product/:id"
                           element = { <DetailProduct cartItem = { cartItem }
                            nowUser = { nowUser }
                            listProducts = { listProducts }
                            getProductById = { getProductById }
                            handleAddProduct = { handleAddProduct }
                            handleRemoveProduct = { handleAddProduct }
                            />} />
            <Route path = "/user/checkout"
                            element = { <Checkout cartItem = { cartItem }
                                handleClearCart = { handleClearCart }
                                />} />
            <Route path = "/admin" element = { <LoginAdmin /> } /> 
            <Route path = "/admin/manager/*"
                                element = { <Admin listProducts = { listProducts }
                                    listUser = { listUser }
                                    />} />
            <Route path = "*" element = { <NotFound /> } /> 
            </Routes> 
            </AuthProvider>     
                                );
                            }

                            export default App;