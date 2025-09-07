import { Component } from "react";
import './ForgotPassword.css';

export class ForgotPassword extends Component {
    render() {
        return (
            <div>
                <div id="forgot-container">
                    <div id="container">
                        <h1>Forgot your password?</h1>
                        <h6>Please enter the email</h6>
                        <p>Your email</p>
                       
                            <input type="email" placeholder=""></input>
                            <button>Request password reset</button>
                            <a href="/">Back to Sign in</a>
                 

                    </div>
                </div>
            </div>

        );
    }
}