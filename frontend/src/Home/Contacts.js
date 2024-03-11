import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {auth} from '../firebase-config';
import ChatOptionsPopup from "./ChatOptionsPopup";

const Contacts = () => {
    const [modalShow, setModalShow] = useState(false);
    const [url, setUrl] = useState("");
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            let response = await axios.post("http://localhost:3500/user", { uid: auth?.currentUser?.uid });
            setContacts(response.data.contacts || []);
            console.log(auth?.currentUser?.uid);
        };

        fetchContacts();
    }, []);

    return (
        <div className="container m-4">
            <div className="row justify-content-center">
                {contacts.map((contact, index) => (
                    <div className="col-lg-3 col-md-6 mx-4 my-4" key={index}>
                        <div className="card text-center border-dark bg-light py-4" style={{width: "18rem", borderRadius: "20px"}}>
                            <div className="card-body">
                                <h4 className="card-title p-3">{contact.name}</h4>
                                <div><button onClick={() => {setModalShow(true); setUrl(contact.url);}} className="btn btn-primary mb-2 rounded-pill px-4">Chat</button></div>
                                <div><a href={contact.url} className="btn btn-primary mb-2 rounded-pill">Go to profile</a></div>
                                <div><a href={contact.url} className="btn btn-primary rounded-pill">Delete Contact</a></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ChatOptionsPopup
                show={modalShow}
                onHide={() => setModalShow(false)}
                link={url}
            />
        </div>
    );
}

export default Contacts;



