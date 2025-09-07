import { Component } from "react";
import './Signup.css';

class Signup extends Component{
        constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: ''
        };
    }

    validateForm = () => {
        const { username, password, confirmPassword } = this.state;

        
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;

        if (!specialCharRegex.test(username)) {
            this.setState({ errors: "Username must contain at least one special character." });
            return false;
        }

        if (!passwordRegex.test(password)) {
            this.setState({ errors: "Password must be 8-16 characters long and include one uppercase letter, one number, and one special character." });
            return false;
        }

        if (password !== confirmPassword) {
            this.setState({ errors: "Passwords do not match." });
            return false;
        }

        this.setState({ errors: "" });
        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            alert("User registered successfully!");

        
        this.setState({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: ''
        });
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    render(){
        return(

            <div class="main-container">
                <div class="container">
                    <h1>Signup</h1>
                    <form onSubmit={this.handleSubmit}>
                         <div class="item">
                            <label for="username">Username</label>
                            <input type="username" id="username" placeholder="Enter your Username"  value={this.state.username} onChange={this.handleChange}></input>
                        </div>
                        <div class="item">
                            <label for=" email">Mail</label>
                            <input type="email" id="email" placeholder="Enter your mail"  value={this.state.email} onChange={this.handleChange}></input>
                        </div>
                        <div class="item">
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Create a password" value={this.state.password} onChange={this.handleChange}></input>
                        </div>
                        <div class="item">
                            <label for=" confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" placeholder="Confirm your password" value={this.state.confirmPassword}  onChange={this.handleChange}></input>
                        </div>
                        <button class="btn" disabled={!this.state.password ||!this.state.confirmPassword ||this.state.password !== this.state.confirmPassword}>Signup</button>
                         {this.state.errors && <p style={{ color: 'red' }}>{this.state.errors}</p>}
                        <div>
                            <p>Already have an account?<a id="logintag"href="/">Login</a></p>
                        </div>
                
                    </form>
                 </div>
            </div>
            

       );
    }
}
export default Signup