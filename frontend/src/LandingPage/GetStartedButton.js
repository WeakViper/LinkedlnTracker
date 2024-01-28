import "./GetStartedButton.css";
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';

const GetStartedButton = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signup');
    };

    return (
        <div className="OrderButtonLanding">
            <div className="d-grid gap-2 col-4 mx-auto">
                <button type="submit" className="btn orderNowButton rounded-pill p-2 btn-primary" onClick={handleClick}>
                    <ArrowRight color="white" size={48} />
                    <span>Get Started</span> {/* Make sure this text is inside the button */}
                </button>
            </div>
            <div className="line-separator my-5"></div>
        </div>
    );
}
 
export default GetStartedButton;
