import React, { useContext } from 'react';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '../../images/google.png';
import './LoginForm.css';
import { initializeApp } from "firebase/app";
import firebaseConfig from '../Firebase/FirebaseConfig';
import { GoogleAuthProvider,signInWithPopup, getAuth } from "firebase/auth";
import { DataStorge } from '../../Storge/Storge';

const app = initializeApp(firebaseConfig);

const LoginForm = () => {
    const navigate = useNavigate()

    // access context api
    const [userInfo, setUserInfo] = useContext(DataStorge)

    const GoogleSignIn = () => {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
         signInWithPopup(auth, provider)
         .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            const {displayName,email} = user
            // user information in object
            const setUser = {
               name: displayName,
               email: email
            }
            setUserInfo(setUser)
            storgeAuthToken()
         }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
         });
    }

    const storgeAuthToken = () => {
      getAuth().currentUser.getIdToken(true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken)
            navigate('/dashboard')
          }).catch(function(error) {
            console.log(error)
        });
    }

    return (
        <div id="login" className='text-center py-5'>
            <div className="login-container">
               <div className="login-inner">
               <h3>Login With</h3>
               <div className="social-account" onClick={GoogleSignIn}>
                  <img src={GoogleIcon} alt="" style={{width: '15%'}}/>
                 <span>Contunie with Google</span>
              </div>
                <span className='d-block mt-3'>Don’t have an account? <Link to="/login">Create an account</Link></span>
              </div>
           </div>
        </div>
    );
};

export default LoginForm;