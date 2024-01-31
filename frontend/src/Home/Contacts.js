import ChatOptionsPopup from "./ChatOptionsPopup";
import { useState } from 'react';


const Contacts = () => {
    const [modalShow, setModalShow] = useState(false);
    const [url, setUrl] = useState("");

    //logic for fetching contacts array from /contacts off the api
    let contacts = [
        {
          name: "Contact 1",
          url: "https://contact1.example.com",
          profileInfo: "Profile info for Contact 1"
        },
        {
          name: "Contact 2",
          url: "https://contact2.example.com",
          profileInfo: "Profile info for Contact 2"
        },
        {
          name: "Contact 3",
          url: "https://contact3.example.com",
          profileInfo: "Profile info for Contact 3"
        },
        {
          name: "Contact 4",
          url: "https://contact4.example.com",
          profileInfo: "Profile info for Contact 4"
        },
        {
          name: "Contact 5",
          url: "https://contact5.example.com",
          profileInfo: "Profile info for Contact 5"
        },
        {
          name: "Contact 6",
          url: "https://contact6.example.com",
          profileInfo: "Profile info for Contact 6"
        }
      ];
      
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



