import { Component } from "react";
import './About.css';
import { Footer } from "./Footer";

export class About extends Component {
    render() {
        return (
            <>
            <div className="about-main">
                <div className="about-header">
                    <h1>About Us</h1>
                </div>
                <div className="about-img">
                    <img src="/images/pretty gal.png"></img>
                </div>
                <div className="about-aside">
                    <h3>Story Behind Brand</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam quos officia voluptas perferendis maiores. Sunt, consequatur dicta architecto vel quibusdam a, officiis quo possimus dignissimos eveniet doloribus hic deleniti!</p>
                </div>


            </div>
            <Footer/>
            </>

        );
    }
}