import { useLocation } from 'react-router-dom';
import HomeNavbar from '../Home/HomeNavbar';
import { useEffect, useState } from 'react';
import copy from 'copy-to-clipboard';

const ContinueChat = () => {
  
    const location = useLocation();
    const { link, chat, suggestions } = location.state;
    const [copied, setCopiedId] = useState("");
    const [copiedText, setCopiedText] = useState("");
    let response = link + chat + suggestions //get the response from the API actually.

    useEffect(() => {
        (async function run() {
          if ( copied?.includes('text') ) {
            // Reading text with readText
            const text = await navigator.clipboard.readText();
            setCopiedText(text);
          }
        })();
        setTimeout(() => {
          setCopiedId(undefined);
          setCopiedText(undefined);
        }, 3000)
      }, [copied]);

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
 
export default ContinueChat;
