import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom'
import $ from 'jquery'
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

const listSort = [{type: 'involve', title: 'Liên quan'},
                  {type: 'latest', title: 'Mới nhất'},
                  {type: 'selling', title: 'Bán chạy'}]

const listSortPrice = [{type: 'increase', title: 'Giá: Thấp đến Cao'},
                       {type: 'decrease', title: 'Giá: Cao đến Thấp'}]

function App() {



    const [listUser, setListUser] = useState([])
    const [nowUser, setNowUser] = useState({ email: '', password: '' })
    const [listProducts, setListProducts] = useState([])
    const [cartItem, setCartItem] = useState([])
    const textSearchProductRef = useRef()

    const [isLoadingHome, setIsLoadingHome] = useState(true)
    const [isLoadingTypeProduct, setIsLoadingTypeProduct] = useState(true)
    const [isLoadingProduct, setIsLoadingProduct] = useState(true)

    const [currentProduct, setCurrentProduct] = useState(listProducts)
    const [typeProduct, setTypeProduct] = useState("full")
    const [typeSortProduct, setTypeSortProduct] = useState("involve")
    const [typeSortPrice, setTypeSortPrice] = useState("Giá")
    

    useEffect(() => {
        setTimeout(() => {
            setIsLoadingProduct(false)
        }, 1600)
    }, [isLoadingProduct])

    useEffect(() => {
        setTimeout(() => {
            setIsLoadingHome(false)
        }, 2000);
    }, [isLoadingHome])

    

    let loginNavigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:3000/product`)
                .then(res => res.json())
                .then(products => {
                    setListProducts(products)
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
        setIsLoadingProduct(true)
        setTypeProduct(tabProduct)
        setTypeSortProduct("involve")
    }

    const handleTypeSortProduct = (itemSort) => {
        setIsLoadingProduct(true)
        setTypeSortProduct(itemSort)
        setTypeSortPrice("Giá")
        if (itemSort === "selling"){
            const sellingProduct = currentProduct.sort((a, b) => a.sellNumber - b.sellNumber)
            setCurrentProduct(sellingProduct)
        }else if ( itemSort === "involve") {
            const involveProduct = currentProduct.reverse()
            setCurrentProduct(involveProduct)
        }else {
            const latestProduct = currentProduct.reverse()
            setCurrentProduct(latestProduct)
        }
    }
    

    const handleSortPriceProduct = (typePrice) => {
        setIsLoadingProduct(true)
        if (typePrice === 'increase') {
            setTypeSortPrice("Giá: Thấp đến Cao")
            const increaseProduct = currentProduct.sort((a, b) => a.price - b.price)
            setCurrentProduct(increaseProduct)
        } else {
            setTypeSortPrice("Giá: Cao đến Thấp")
            const descreaseProduct = currentProduct.sort((a, b) => b.price - a.price)
            setCurrentProduct(descreaseProduct)
        }
    }



    const handleSearchProduct = (e) => {
        if(textSearchProductRef.current.value !== ""){
            setIsLoadingProduct(true)
            setTypeSortProduct("involve")
            setTypeSortPrice("Giá")
            e.preventDefault()
            const infoProductSearch = textSearchProductRef.current.value
            setCurrentProduct(listProducts.filter(product => product.describe.toLowerCase().includes(infoProductSearch.toLowerCase())))
        }
    }

    const handleAddProduct = (product) => {
        const ProductExits = cartItem.find((item) => item.id === product.id)
        if (ProductExits) {
            setCartItem(cartItem.map((item) => item.id === product.id ? {...ProductExits, quantity: ProductExits.quantity + 1 } : item))
        } else {
            setCartItem([...cartItem, {...product, quantity: 1 }])
        }
        
        const imgfly = <img src={product.thum} style={{
            position: 'absolute',
            zIndex: 10,
            top: 0,
            left: 0,
            height: '60px',
            width: '60px',
            borderRadius: '2px',
            border: '1px solid white',
            transition: 'all 1s ease-in',
       }} 
      className="product_fly" alt='sdfsdf'/>
      ReactDOM.render(imgfly, document.getElementById(product.id))
      setTimeout(() => {
          $(document).find('.product_fly').css({
              'top': 246,
              'left': 132,
              'width': 26,
              'height': 26,
              'opacity': 0.3,
              'transform': 'rotateZ(360deg)'
          })
          setTimeout(() => {
            $(document).find('.product_fly').remove()
          }, 1000);
      }, 100);
    }

    const handleAddProduct2 = (product) => {
        const ProductExits = cartItem.find((item) => item.id === product.id)
        if (ProductExits) {
            setCartItem(cartItem.map((item) => item.id === product.id ? {...ProductExits, quantity: ProductExits.quantity + 1 } : item))
        } else {
            setCartItem([...cartItem, {...product, quantity: 1 }])
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

    const handleLoading = () => {
        setIsLoadingHome(true)
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
                listSort = { listSort }
                typeSortProduct = { typeSortProduct }
                handleTypeSortProduct = { handleTypeSortProduct }
                typeSortPrice = { typeSortPrice }
                listSortPrice = {listSortPrice}
                handleSortPriceProduct = { handleSortPriceProduct }
                currentProduct = { currentProduct }
                listUser = { listUser }
                nowUser = { nowUser }
                handleLogout = { handleLogout }
                handleLoading = { handleLoading }
                isLoadingHome = { isLoadingHome }
                isLoadingTypeProduct = { isLoadingTypeProduct }
                isLoadingProduct = { isLoadingProduct }
                 />} />
            <Route path = "/user/signup"
                element = { <Signup /> } 
                    handleLoading = { handleLoading }
                /> 
            <Route path = "/user/login"
                element = { <Login listUser = { listUser }
                    handleLogin = { handleLogin } />} 
                    handleLoading = { handleLoading }
                    />
            <Route path = "/user/CartProduct"
                    element = { <Cart 
                        listProducts = { listProducts }
                        cartItem = { cartItem }
                        handleAddProduct2 = { handleAddProduct2 }
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
                            handleAddProduct2 = {handleAddProduct2}
                            handleRemoveProduct = { handleAddProduct }
                            />} />
            <Route path = "/user/checkout"
                            element = { <Checkout cartItem = { cartItem }
                                handleClearCart = { handleClearCart }
                                handleLoading = { handleLoading }
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