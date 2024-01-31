import googleLogo from '../assets/googleLogo.webp';
import BackgroundImage from "../assets/BackgroundMain.jpeg"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddContact() {
  const [email, setEmail] = useState('');
  const [link, setLink] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {email: email, password: link};
    console.log(JSON.stringify(user));

    navigate("/home")
  }

  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Add New Contact</title>
      </head>
      <body style={{
        backgroundImage: `url(${BackgroundImage})`, // Set background image
        backgroundSize: 'cover', // Stretch to cover the whole screen
        backgroundRepeat: 'no-repeat', // Prevent image repetition
        backgroundAttachment: 'fixed', // Keep the image fixed while scrolling
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
      }}>
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="row border rounded-5 p-3 bg-white shadow box-area justify-content-center">
            <div className="col-md-6 right-box">
              <div className="row align-items-center">
                <div className="header-text mb-4">
                  <h2>Add Contact</h2>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                <input
                      type="text"
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="Name"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group mb-5">
                <input
                      type="text"
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="Link To their profile"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                  <button className="btn btn-lg btn-primary w-100 fs-6">Add Contact</button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default AddContact;