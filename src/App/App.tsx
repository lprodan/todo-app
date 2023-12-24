import { Navigate, NavLink, redirect, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase.ts";
import { setUserId } from "../API/api.ts";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResetPassword = lazy(() => import("../Authentication/ResetPassword.tsx"));
const Login = lazy(() => import("../Authentication/Login.tsx"));
const Home = lazy(() => import("../Home/Home.tsx"));
const About = lazy(() => import("../About/About.tsx"));
const SignUp = lazy(() => import("../Authentication/SignUp.tsx"));
const ListComponent = lazy(() => import("../ListComponent/ListComponent.tsx"));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>();
  const [email, setEmail] = useState("");
  console.log(isAuthenticated);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      if (user) {
        setUserId(user.uid);
        setEmail(user.email ?? "Anonymous");
      } else {
        setEmail("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => redirect("/auth/login"))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      {isAuthenticated !== undefined && (
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {isAuthenticated ? (
                <li>
                  <NavLink to="/tasks">ToDo</NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to="/auth/login">Log In</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </nav>

          {isAuthenticated ? (
            <div className="user-email">
              <span>{email}</span>
              <button
                type="button"
                className="btn btn-sign-out"
                onClick={handleSignOut}
                title="Sign Out"
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
              </button>
            </div>
          ) : (
            ""
          )}
        </header>
      )}
      <main>
        <Suspense fallback={<div className="message">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            {isAuthenticated ? (
              <Route path="/tasks" element={<ListComponent />} />
            ) : (
              <>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<SignUp />} />
                <Route
                  path="/auth/reset-password"
                  element={<ResetPassword />}
                />
              </>
            )}
            <Route path="/about" element={<About />} />
            {isAuthenticated !== undefined && (
              <Route
                path="*"
                element={
                  <Navigate to={isAuthenticated ? "/tasks" : "/auth/login"} />
                }
              />
            )}
          </Routes>
        </Suspense>
      </main>
    </React.Fragment>
  );
}

export default App;
