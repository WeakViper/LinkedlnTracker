import HomeNavbar from "./HomeNavbar";
import Contacts from "./Contacts";
import AddContactButton from "./addContactButton";

const Home = () => {
    return (
        <div className="HomePage">
            <HomeNavbar sticky="top" exact />
            <div className="d-flex justify-content-start">
                <h1 className="h2 m-5" style={{color: "black", fontWeight: "bold"}}>
                    My Contacts
                </h1>
            </div>
            <div className="line-separator mb-5" style={{borderTop: "2px solid black", width: "90%", marginLeft: "5%", marginRight: "5%"}}></div>
            <Contacts />
            <div className="line-separator mb-5" style={{borderTop: "2px solid black", width: "90%", marginLeft: "5%", marginRight: "5%"}}></div>
            <AddContactButton />
        </div>
    );
}
 
export default Home;
