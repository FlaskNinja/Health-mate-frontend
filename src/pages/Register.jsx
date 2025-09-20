import heroImg from "../img/logo.png";
import { Link } from "react-router-dom";
import "../signup.css"
const SignUp = () => {
    return ( 
        <div className="sign">
        <div className="signup-container">
            <div className="logo">
                <img src={heroImg} alt="hero image" />
            </div>
            <div className="signup-form">
                <button className="select">
                    <Link to="/login">Sign Up</Link>
                </button>
                <button className="select">
                    <Link to="/login">Login</Link>
                </button>
            </div>

            <p>We advice you visit our <Link to="/">home page</Link> for more information on this software</p>
        </div>
        </div>
     );

}
 
export default SignUp;