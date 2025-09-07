import { Component } from "react";
import './Section.css';
import { Link } from "react-router-dom";

export class Section extends Component {
    render() {
        return (
            <section>
                <div>
                    
                    <div className="container">
                       <h3 className="newword">NEW</h3>
                        <h3>COLLECTION</h3>
                        <div>
                            <button><Link to="/shop"> Shop Now</Link></button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}