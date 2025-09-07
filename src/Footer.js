import { Component } from "react";
import { Link } from "react-router-dom";
import './Footer.css'

export class Footer extends Component {
    render() {
        return (
            <div className="footer-main">
                <div className="col-1">
                    <ul>
                        <h6>QUICK LINKS</h6>
                        <li><Link to="/home">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/">LOGIN</Link></li>
                    </ul>
                </div>
                <div className="col-2">
                    <ul>
                        <h6>HELP & INFO</h6>
                        <li>FIND US EASY</li>
                        <li>FAQS</li>

                    </ul>
                </div>
                <div className="col-3">
                    <ul>
                        <h6>CONTACT US</h6>
                        <li>
                            <h5>Do you have any suggestions for us?</h5>
                            <h6>contact@prettygal.com</h6>
                        </li>
                        <li>
                            <h5>Do you need support? Give us a call.</h5>
                            <h6>+43 720 11 52 78</h6>
                        </li>

                    </ul>
                </div>

                <div className="col-5">
                    <p>&copy;Copyright 2025 Prettygal.All rights.reserved.</p>
                </div>
            </div>

        );
    }
}