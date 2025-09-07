
import { Component } from "react";
import './LogAuth.css'

class LogAuth extends Component{
    constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    };
   }
   handleInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }
  handleLogin = async (e) => {
    e.preventDefault();

    const { username, password } = this.state;
     try {
      const response = await fetch('/users.json'); 
      const users = await response.json();

      const userFound = users.find(
        user => user.username === username && user.password === password
      );

      if (userFound) {
       
        window.location.href = '/home';  
      } else {
        this.setState({ error: 'Invalid username or password' });
      }
    } catch (error) {
      this.setState({ error: 'Error logging in. Please try again later.' });
    }
  }

    render(){
        return(
            <div class="main-container">
                <div class="container">
                    <h1>Login</h1>
                    <form onSubmit={this.handleLogin}>
                        <div class="item">
                            <label for="username">Username</label>
                            <input type="text" id="username" placeholder="Enter your Username" onChange={this.handleInputChange}></input>
                        </div>
                         <div class="item">
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your Password" onChange={this.handleInputChange}></input>
                        </div>
                        <button class="btn">Login</button>
                        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
                        <a id="forgotpassword" href="/forgotpassword">forgot password?</a><br></br>
                        <div>
                            <p>Don't have an account?<a id="logintag"href="/Signup">Signup</a></p>
                        </div>


                    </form>

                </div>

            </div>

        );

    }
}
export default LogAuth