import React, {Component} from 'react';
import axios from 'axios';
import {Textfield, Button} from 'react-mdl'
let Token= sessionStorage.getItem("TokenKey");
// if(Token){console.log("Logged In")}
// else 
// { window.location.href = "/login";}
class AddPro extends Component{

    state = {
        name: '',
        description:'',
        quantity: '',
        dataSheet:'',
        
    }



    handleChange = event =>{
        this.setState({[event.target.name]: event.target.value });
    }
    handleClick = event => {
        event.preventDefault()
        if(this.state.dataSheet){
        var Product ={
            name: this.state.name,
            description: this.state.description,
            quantity: this.state.quantity,
            dataSheet: this.state.dataSheet,
                   }}
        else
        {
           Product ={
            name: this.state.name,
            description: this.state.description,
            quantity: this.state.quantity,
                   }}
                   
    
        console.log(Product);
        axios({
            method: 'post',
            url: "http://localhost:3005/Products",
            headers: {
                'Authorization': 'Bearer '+Token,
              },
              data: {Product}
          }).then(res =>{
                alert(res.data.message);
               window.location.href = "/AddPro";
            })
          
    }
  
    render()
    {  
            return(
              <div style={{textAlign:'center'}}>
              <h1></h1>
              <img src ="D:\EARL LAB website\frontend\photos\Issue.png" alt="Issue" width="120" height="120"/>
              <div>
                   <Textfield
                           onChange={this.handleChange}
                          name='name'
                          value={this.state.name}
                          label="Name"
                          floatingLabel
                          style={{width: '200px'}}
                      />
                    </div>
                    <div>
                      
                      <Textfield
                           onChange={this.handleChange}
                          name='description'
                          value={this.state.descriptions}
                          label="Description"
                          floatingLabel
                          style={{width: '200px'}}
                      />
                      </div>
                       <div>
                      
                       <Textfield
                            onChange={this.handleChange}
                           name='quantity'
                           value={this.state.quantity}
                           label="Quantity"
                           floatingLabel
                           style={{width: '200px'}}
                       />
                       </div>
                        <div>
                  
                        <Textfield
                             onChange={this.handleChange}
                            name='dataSheet'
                            value={this.state.dataSheet}
                            label="Data Sheet"
                            floatingLabel
                            style={{width: '200px'}}
                        />
                        </div>
                          <div>
                        <Button raised onClick={this.handleClick}>Add</Button>
                        </div>
                        
              
            </div>
            
              //   <div>
              //   <form>
              //   <label >
              //     Name:
              //     <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
              //   </label>
              //   <label>
              //     Description:
              //     <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
              //   </label>
              //   <label>
              //     Quantity:
              //     <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
              //   </label>
              //   <label>
              //     Data Sheet:
              //     <input type="text" name="dataSheet" value={this.state.dataSheet} onChange={this.handleChange}/>
              //   </label>
              //   {/* <input type="submit" value="Submit" /> */}
              //   <button type="button" onClick={this.handleClick}>Add Product</button>
              // </form>    
              // </div>

            );
                 
    }

  }
  export default AddPro
