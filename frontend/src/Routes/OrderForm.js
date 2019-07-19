import React, {Component} from 'react';
import axios from 'axios';
import {Textfield, Button} from 'react-mdl'
let ID= sessionStorage.getItem("ID");
let Token= sessionStorage.getItem("TokenKey");
class OrderForm extends Component{

    state = {
        ordername:'',
        quantity:'',
        rollNo: '',
        Email:'',
        mobileno:'',
        Instruments: [],
    }

    componentDidMount(){
        axios.get('http://localhost:3005/products/'+ID)
        .then(res =>{
          console.log(res);
          this.setState({Instruments: res.data.product})
        })
        }

    handleChange = event =>{
            this.setState({[event.target.name]: event.target.value });}

    handleClick=(e)=>{
         

        if(((this.state.Instruments.quantity)-(this.state.quantity))<0)
        {
            alert("Not enough quantity available");
            window.location.href = "/Instruments";
           } 
           else{
    
        const Order ={
            ordername: this.state.name,
            rollNo: this.state.rollNo,
            quantity: this.state.quantity,
            Email: this.state.Email,
            mobileno: this.state.mobileno,
            productId: ID,
                    }          

        const Product ={
            name: this.state.Instruments.name,
            description: this.state.Instruments.description,
            quantity: (this.state.Instruments.quantity)-(this.state.quantity),
            dataSheet:this.state.Instruments.dataSheet,
        }
        axios({
            method: 'post',
            url: "http://localhost:3005/orders",
            headers: {
           'Authorization': 'Bearer '+Token,
            },
                data: {Order}
            }).then(res =>{
                    alert(res.data.message);
                
              })
 
              axios({
                method: 'patch',
                url: "http://localhost:3005/products/"+ID,
                headers: {
               'Authorization': 'Bearer '+Token,
                },
                    data: {Product}
                }).then(res =>{
                        window.location.href = "/Orders";
                  })
    }}
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
                      name='Email'
                      value={this.state.password}
                      label="Email"
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
                        name='rollNo'
                        value={this.state.rollNo}
                        label="rollNo"
                        floatingLabel
                        style={{width: '200px'}}
                    />
                    </div>
                    <div>
                    
                    <Textfield
                         onChange={this.handleChange}
                        name='mobileno'
                        value={this.state.mobileno}
                        label="mobileno"
                        floatingLabel
                        style={{width: '200px'}}
                    />

                    <div>
                    <Button raised onClick={this.handleClick}>Update</Button>
                    </div>
                    </div>
          
        </div>
        
        );
                 
    }

  }
  export default OrderForm