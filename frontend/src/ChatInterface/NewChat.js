import { useParams } from 'react-router-dom';
import HomeNavbar from '../Home/HomeNavbar';
import { useEffect, useState } from 'react';
import copy from 'copy-to-clipboard';

const NewChat = () => {
    const params = useParams();
    const { link } = params;
    const [copied, setCopiedId] = useState("");
    const [copiedText, setCopiedText] = useState("");
    let response = "Hello I am Adeeb" //get the response from the API actually.

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

            <div className="">
                <button
                className=""
                onClick={async () => {
                    // Writing text with writeText and a fallback using copy-to-clipboard
                    
                    if ( 'clipboard' in navigator ) {
                    await navigator.clipboard.writeText('navigator.clipboard.writeText()')
                    } else {
                    copy('await navigator.clipboard.writeText()');
                    }

                    setCopiedId('write-text')
                }}
                >
                {copied === 'write-text' ? '✅ Copied' : 'Copy'}
                </button>
                <pre><code>{`navigator.clipboard.writeText()`}</code></pre>
            </div>
            
        </div>

    );
}
 
export default NewChat;