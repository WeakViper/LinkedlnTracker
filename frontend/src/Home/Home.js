import HomeNavbar from "./HomeNavbar";
import Contacts from "./Contacts";
import BackgroundImage from "../assets/BackgroundMain.jpeg"

const Home = () => {
    return (
        <div style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            margin: 0,
            padding: 0,
            height: '100vh',
          }}>
        <div className="HomePage">
            <HomeNavbar sticky="top" exact />
            <Contacts />
        </div>
        </div>
    );
}
 
export default Home;