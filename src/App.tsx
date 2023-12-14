import {Navigate, NavLink, redirect, Route, Routes, useNavigate} from "react-router-dom";
import "./App.css"
import React, {lazy, Suspense, useEffect, useState} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "./firebase.ts";
import {setUserId} from "./API/api.ts";

const ResetPassword = lazy(() => import("./LoginPage/ResetPassword.tsx"))
const Login = lazy(() => import("./LoginPage/Login.tsx"))
const Home = lazy(() => import("./Home/Home.tsx"))
const About = lazy(() => import("./About/About.tsx"))
const SignUp = lazy(() => import("./LoginPage/SignUp.tsx"))
const ListComponent = lazy(() => import("./ListComponent/ListComponent.tsx"))

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [email, setEmail] = useState("")

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setIsAuthenticated(!!user)
            if (user) {
                setUserId(user.uid)
                setEmail(user.email ?? "")
            } else {
                setEmail("")
            }
        })

        return () => unsubscribe()
    }, []);


    const handleSignOut = () => {
        signOut(auth).then(() => redirect("/auth/login")).catch(error => {
            console.log(error)})
    }

    return <React.Fragment>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    {isAuthenticated ?
                        <li>
                            <NavLink to="/tasks">ToDo</NavLink>
                        </li> :
                        <li>
                            <NavLink to="/auth/login">Log In</NavLink>
                        </li>}
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="user-email">
                <span>{email}</span>
                {isAuthenticated ? <button type="button" className="btn-submit" onClick={handleSignOut}>Sign Out</button> : ""}
            </div>
        </header>
        <main>
            <Suspense fallback={<div className="message">Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {isAuthenticated ?
                        <Route path="/tasks" element={<ListComponent/>}/> :
                        <>
                            <Route path="/auth/login" element={<Login/>}/>
                            <Route path="/auth/signup" element={<SignUp/>}/>
                            <Route path="/auth/reset-password" element={<ResetPassword/>}/>
                        </>}
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<Navigate to={isAuthenticated ? "/tasks" : "/auth/login"}/>}/>
                </Routes>
            </Suspense>
        </main>
    </React.Fragment>
}

export default App;
