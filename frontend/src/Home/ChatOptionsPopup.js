import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ChatOptionsPopup(props) {
  const { link } = props;

  const handleGenerateMessageClick = () => {
    // Your code for handling the "Generate Introduction Message" button click goes here
  };

  const handleContinueChatClick = () => {
    // Your code for handling the "Continue Existing Chat" button click goes here
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Options</h4>
        <div className="button-container d-flex justify-content-center">
          <Button variant="primary" className="btn btn-primary rounded-pill px-4 py-2 mx-5 my-2" onClick={handleGenerateMessageClick}>Generate Introduction Message</Button>
          <Button variant="primary" className="btn btn-primary rounded-pill px-5 py-2 mx-5 my-2" onClick={handleContinueChatClick}>Continue Existing Chat</Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ChatOptionsPopup;

