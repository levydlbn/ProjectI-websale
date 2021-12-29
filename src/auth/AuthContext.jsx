import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth'
import React, { useContext, useState, useEffect } from 'react'
// import Signup from '../components/user/Signup'
import { auth } from '../firebase/firebase'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState()

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // useEffect(() => {
    //     const onAuthState = onAuthStateChanged(auth, (user) => {
    //         setCurrentUser(user)
    //     })

    //     return => onAuthState
    // }, [])

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const value = {
        currentUser,
        signup,
        login
    }

    return ( 
    <AuthContext.Provider value = { value }> 
        { children } 
    </AuthContext.Provider>
    )
}

export default AuthProvider