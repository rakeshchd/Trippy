import "./SignupFormStyles.css"
import SignupImg from "../assets/7wonders.jpg"

function SignupForm(){
    return (
        <div className="signup-form">
            <img src={SignupImg} alt="" className="signup-img" />
            <form className="signup-container">
                <h1>Sign Up Form</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" name="" id="" placeholder="Password"/>
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default SignupForm;