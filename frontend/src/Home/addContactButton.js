import "./addContactButton.css";
import { useNavigate } from 'react-router-dom';
import { Plus } from 'react-bootstrap-icons';

const AddContactButton = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/addContact');
    };

    return (
        <div className="OrderButtonLanding">
            <div className="d-flex justify-content-start m-5 px-5"> {/* Use justify-content-start to align to the left */}
                <button type="submit" className="btn orderNowButton rounded-pill p-5 btn-primary" onClick={handleClick}>
                    <Plus color="white" size={48} />
                    <span>Add Contact</span>
                </button>
            </div>
            <div className="line-separator my-5"></div>
        </div>
    );
}
 
export default AddContactButton;
