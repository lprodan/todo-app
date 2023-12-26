import { redirect } from "react-router-dom";
import "./App.css";
import { Suspense, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase/config.ts";
import { setUserId } from "./firebase/api.ts";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Routes } from "./AppRoutes.tsx";
import { AppHeader } from "./AppHeader.tsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>();
  const [email, setEmail] = useState("");

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
    <>
      {isAuthenticated !== undefined ? (
        <>
          <header>
            <AppHeader isAuthenticated={isAuthenticated} />

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
          <main>
            <Suspense fallback={<div className="message">Loading...</div>}>
              <Routes isAuthenticated={isAuthenticated} />
            </Suspense>
          </main>
        </>
      ) : (
        <div className="message">Loading...</div>
      )}
    </>
  );
}

export default App;
