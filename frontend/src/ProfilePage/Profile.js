import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Check, PencilSquare } from 'react-bootstrap-icons';
import HomeNavbar from '../Home/HomeNavbar';
import './MainPage.css';
import userImg from "../assets/user-image.jpg"

const Profile = () => {
    const [isEditingLink, setIsEditingUsername] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [link, setLink] = useState("www.something.com");
    const [email, setEmail] = useState("user@example.com");

    const usernameInputRef = useRef(null);
    const emailInputRef = useRef(null);

    useEffect(() => {
        // Focus the input field when editing starts
        if (isEditingLink) {
            usernameInputRef.current.focus();
        }
        if (isEditingEmail) {
            emailInputRef.current.focus();
        }
    }, [isEditingLink, isEditingEmail]);

    const handleEditUsernameToggle = () => {
        setIsEditingUsername(!isEditingLink);
    };

    const handleEditEmailToggle = () => {
        setIsEditingEmail(!isEditingEmail);
    };

    const handleUsernameChange = (event) => {
        setLink(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className="main-page">
            <HomeNavbar />
            <Container>
                <Row className="align-items-center">
                    <Col className="text-center">
                        <div className="user-circle mt-3">
                            <img src={userImg} alt="User" />
                        </div>
                        <div className="user-info">
                            <h4>Name</h4>
                            <p>user@example.com</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <div className="banners">
                            <Card className="mb-3 edit-card">
                                <Card.Body>
                                    <Card.Title>Link</Card.Title>
                                    <div className="editable-field">
                                        {isEditingLink ? (
                                            <>
                                                <input
                                                    type="text"
                                                    ref={usernameInputRef}
                                                    value={link}
                                                    onChange={handleUsernameChange}
                                                    style={{ width: link.length ? link.length * 10 : 'auto' }}
                                                />
                                                
                                                <button
                                                    className="save-btn"
                                                    onClick={handleEditUsernameToggle}
                                                >
                                                    <Check size={20} /> Save
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                {link}&nbsp;
                                                <button className="edit-btn" onClick={handleEditUsernameToggle}>
                                                    <PencilSquare size={20} className="edit-icon" />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="mb-3 edit-card">
                                <Card.Body>
                                    <Card.Title>Email</Card.Title>
                                    <div className="editable-field">
                                        {isEditingEmail ? (
                                            <>
                                                <input
                                                    type="email"
                                                    ref={emailInputRef}
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                    style={{ width: email.length ? email.length * 10 : 'auto' }}
                                                />
                                                <button
                                                    className="save-btn"
                                                    onClick={handleEditEmailToggle}
                                                >
                                                    <Check size={20} /> Save
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                {email}&nbsp;
                                                <button className="edit-btn" onClick={handleEditEmailToggle}>
                                                    <PencilSquare size={20} className="edit-icon" />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;
