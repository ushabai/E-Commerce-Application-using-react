import { Component } from "react";
import './Home.css'

import Navbar  from "./Navbar";
import { Section } from "./Section";
import { Footer } from "../Footer";

class Home extends Component{
    render(){
        return(
           <div>
           
                    
                
                <div>
                     <Navbar/>

                </div>
                
                <Section/>
                <Footer/>
               
            </div>

        );
    }

}
export default Home;
