import React, {Component} from 'react';
import axios from 'axios';
import {Textfield, Button} from 'react-mdl'
let ID= sessionStorage.getItem("ID");
let Token= sessionStorage.getItem("TokenKey");
// if(Token){console.log("Logged In")}
// else 
// { window.location.href = "/login";}
var Name, Desc, quant, DS;
class editproduct extends Component{

    state = {
        name: '',
        description:'',
        quantity: '',
        dataSheet:'',
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


        handleClick = event => {
            event.preventDefault();
            
            if (this.state.name){Name= this.state.name}
            else{Name= this.state.Instruments.name}
            console.log(Name);

            if (this.state.description){Desc= this.state.description}
            else{Desc= this.state.Instruments.description}
            console.log(Desc);

            if (this.state.quantity){quant= this.state.quantity}
            else{quant= this.state.Instruments.quantity}
            console.log(quant);

            if (this.state.dataSheet){DS= this.state.dataSheet}
            else{DS= this.state.Instruments.dataSheet}
            console.log(DS);
            
            const Product ={
                name: Name,
                description: Desc,
                quantity: quant,
                dataSheet: DS,
                           }
            console.log(Product);
            axios({
            method: 'patch',
            url: "http://localhost:3005/Products/"+ID,
            headers: {
           'Authorization': 'Bearer '+Token,
            },
                data: {Product}
            }).then(res =>{
                    alert(res.data.message);
                    window.location.href = "/Instruments";
              })
    }



render(){
    
    return(
      <div style={{textAlign:'center'}}>
      <h1></h1>
      <img src ="D:\EARL LAB website\frontend\photos\edit.jpg" alt="Issue" width="120" height="120"/>
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
    );
}
    }
   
export default editproduct