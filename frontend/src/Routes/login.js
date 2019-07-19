import React, {Component} from 'react';
import axios from 'axios';
import {Textfield, Button} from 'react-mdl'


class login extends Component{

    state = {
        email: '',
        password: '',
    }
    handleChange = event =>{
        this.setState({[event.target.name]: event.target.value });
    }
    handleLogin = event => {
        event.preventDefault()
        const user ={
            email: this.state.email,
            password: this.state.password,
                   }
                   
    
        console.log(user);
        axios({
            method: 'post',
            url: "http://localhost:3005/users/login",
            headers: {}, 
            data: {
                user
            }
          }).then(res =>{
                alert(res.data.message);
               const token = res.data.token;
                console.log(token);
               sessionStorage.setItem('TokenKey', token);
               window.location.href = "/";
            })
          
    }
  
    render()
    {  
            return(
                <div style={{textAlign: 'center'}}>
                    <h3 ></h3>
                    <img src="D:\EARL LAB website\frontend\photos\Login.png" alt='Login-Image' width="110" height="109"/>
                  <div>
                       {/* Textfield with floating label */}
                  <Textfield
                       onChange={this.handleChange}
                      name='email'
                      value={this.state.email}
                      label="Email"
                      floatingLabel
                      style={{width: '200px'}}
                  />
                </div>
                <div>
                  {/* Numeric Textfield with floating label */}
                  <Textfield
                       onChange={this.handleChange}
                      name='password'
                      type= 'password'
                      value={this.state.password}
                      label="Password"
                      floatingLabel
                      style={{width: '200px'}}
                  />
                  </div>
                  <Button raised onClick={this.handleLogin}>Login</Button>
                {/* <form>
                <label >
                  Email:
                  <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                </label>
                <label>
                  Password:
                  <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </label> */}
                {/* <input type="submit" value="Submit" /> */}
                {/* <button type="button" onClick={this.handleLogin}>Login</button>
              </form>     */}

              </div>

            );
                 
    }

  }
  export default login
