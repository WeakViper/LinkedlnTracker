import { useLocation } from 'react-router-dom';
import HomeNavbar from '../Home/HomeNavbar';
import { useEffect, useState } from 'react';
import copy from 'copy-to-clipboard';
import axios from 'axios';
import { auth } from '../firebase-config';
import { Spinner } from 'react-bootstrap';

const NewChat = () => {
  
    const location = useLocation();
    const { link } = location.state;
    const [copied, setCopiedId] = useState("");
    const [copiedText, setCopiedText] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(true); // Add this line

    useEffect(() => {
        axios.get("http://localhost:3500/prompt/intro", {uid: auth?.currentUser?.uid, url: link}).then((res) => {
            setResponse(res);
            setLoading(false); // Set loading to false when the response is received
        });

        // Rest of your useEffect code
    }, []); //copied, link can be added here to make the useEffect run when they change but idts we need to for now TEST THIS.

    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <Spinner animation="border" role="status" className='p-4 m-5'>
                </Spinner>
            </div>
        ); // Display a Bootstrap spinner while loading
    }

    return (
        <div className="NewChatPage">
            <HomeNavbar sticky="top" exact />

            <div className="p-5">
                <button
                className="btn btn-primary px-5, py-2 mb-3"
                onClick={async () => {
                    // Writing text with writeText and a fallback using copy-to-clipboard
                    
                    if ( 'clipboard' in navigator ) {
                    await navigator.clipboard.writeText(response)
                    } else {
                    copy('await navigator.clipboard.writeText(response)');
                    }

                    setCopiedId('write-text')
                }}
                >
                {copied === 'write-text' ? 'Copied!' : 'Copy'}
                </button>
                <pre className="p-3 bg-light border rounded"><code style={{ fontSize: ' 18px' }}>{`${response}`}</code></pre>
            </div>
        </div>

    );
}
 
export default NewChat;
