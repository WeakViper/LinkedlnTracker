import { useParams } from 'react-router-dom';
import HomeNavbar from '../Home/HomeNavbar';

const ContinueChat = () => {
  
    const params = useParams();
    const { link } = params;


    return (
        <div className="NewChatPage">
            <HomeNavbar sticky="top" exact />

            
        </div>

    );
}
 
export default ContinueChat;
