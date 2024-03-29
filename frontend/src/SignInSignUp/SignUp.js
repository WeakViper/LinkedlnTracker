import googleLogo from "../assets/googleLogo.webp";
import "./login.css";
import backgroundImg from "../assets/BackgroundMain.jpeg";
import { useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [url, setUrl] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [userCreated, setUserCreated] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const [existingUser, setExistingUser] = useState(false);
  const [unknownError, setUnknownError] = useState(false);

  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
  
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      axios.post("http://localhost:3500/user/create", { name: firstName + " " + lastName, email: email, uid: auth?.currentUser?.uid, url: url }).then((res) => {
        console.log("Success!");
        //navigate("/home");
      });
    } catch (error) {
      console.error(error);
      if (error.code === "auth/email-already-in-use") {
        setExistingUser(true);
        setUnknownError(false);
      } else {
        setUnknownError(true);
        setExistingUser(false);
      }
    }
  };
  
  const signInWithGoogle = async (e) => {
    e.preventDefault();

    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (error) {
      console.error(error);
      setUnknownError(true);
    }
  };

  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
        <title>Sign Up</title>
      </head>
      <body
        style={{
          backgroundImage: `url(${backgroundImg})`, // Set background image
          backgroundSize: "cover", // Stretch to cover the whole screen
          backgroundRepeat: "no-repeat", // Prevent image repetition
          backgroundAttachment: "fixed", // Keep the image fixed while scrolling
          margin: 0, // Remove default margin
          padding: 0, // Remove default padding
        }}
      >
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="row border rounded-5 p-3 bg-white shadow box-area justify-content-center">
            <div className="col-md-6 right-box">
              <div className="row align-items-center">
                <div className="header-text mb-4">
                  <h2>Hello There!</h2>
                  <p>We are excited to have you join us!.</p>
                </div>
                <form>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="LinkedIn URL"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-5 d-flex justify-content-between">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="formCheck"
                      />
                      <label
                        htmlFor="formCheck"
                        className="form-check-label text-secondary"
                      >
                        <small>Remember Me</small>
                      </label>
                    </div>
                  </div>
                  {!passwordsMatch && (
                    <div className="alert alert-danger" role="alert">
                      Passwords do not match.
                    </div>
                  )}
                  {invalidInput && (
                    <div className="alert alert-danger" role="alert">
                      Invalid Input.
                    </div>
                  )}
                  {existingUser && (
                    <div className="alert alert-danger" role="alert">
                      Account with given email id already exists.
                    </div>
                  )}
                  {userCreated && (
                    <div className="alert alert-success" role="alert">
                      Account has been successfully created!
                    </div>
                  )}
                  {unknownError && (
                    <div className="alert alert-danger" role="alert">
                      Unkown error has occured. Please try again.
                    </div>
                  )}
                  <div className="input-group mb-3 loginButton">
                    <button
                      className="btn btn-lg btn-primary w-100 fs-6"
                      onClick={signUp}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <div className="input-group mb-3">
                  <button
                    className="btn btn-lg btn-light w-100 fs-6"
                    onClick={signInWithGoogle}
                  >
                    <img
                      src={googleLogo}
                      style={{ width: "20px" }}
                      className="me-2"
                      alt="Google Logo"
                    />
                    <small>Sign In with Google</small>
                  </button>
                </div>
                <div className="row">
                  <small>
                    Already have an account? <a href="/signin">Sign In</a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default SignUp;
