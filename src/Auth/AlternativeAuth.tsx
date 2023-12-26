import { signInAnonymously, signInWithRedirect } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase/config";

export const AlternativeAuth = () => {
  const authGoogle = () => signInWithRedirect(auth, googleAuthProvider);

  const authAnonym = () =>
    signInAnonymously(auth).catch((error) => {
      console.log(error.message);
    });

  return (
    <div className="other-auth">
      <button
        type="button"
        className="btn btn-other-auth"
        title="Sign in with Google"
        onClick={authGoogle}
      >
        <img
          src="/public/icon-google.png"
          alt="google-icon"
          className="icon-google"
        />
        Sign in with Google
      </button>
      <button
        type="button"
        className="btn btn-other-auth"
        title="Sign in with Google"
        onClick={authAnonym}
      >
        <img
          src="/public/icon-anonymous.png"
          alt="google-icon"
          className="icon-google"
        />
        Anonymous sign in
      </button>
    </div>
  );
};
