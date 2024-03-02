import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import HomeNavbar from '../Home/HomeNavbar';
import { Button, Form } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';
import './EnterExistingChat.css';

const EnterExistingChat = () => {
  
    const location = useLocation();
    const { link } = location.state;
    const navigate = useNavigate();

    const [chat, setChat] = useState('');
    const [suggestions, setSuggestions] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/continuechat', { state: { link, chat, suggestions } });
    }

    return (
        <div className="NewChatPage">
            <HomeNavbar sticky="top" exact />
            <Form className="m-4" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter your existing Chat so far:</Form.Label>
                    <TextareaAutosize className="textarea" minRows={5} placeholder="Enter Chat" value={chat} onChange={(e) => setChat(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Any Specific way you want to respond? (Optional)</Form.Label>
                    <TextareaAutosize className="textarea" minRows={2} placeholder="Enter suggestions" value={suggestions} onChange={(e) => setSuggestions(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" className="px-4" style={{ borderRadius: '15px'}}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}
 
export default EnterExistingChat;
