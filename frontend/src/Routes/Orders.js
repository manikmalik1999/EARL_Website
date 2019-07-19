import React, {Component} from 'react';
import axios from 'axios';
import{DataTable, TableHeader} from'react-mdl'
let Token= sessionStorage.getItem("TokenKey");

class Orders extends Component{

    state = {
        Orders: [],
        Instruments: [],
    }

HandleClick=(e)=>{
var IDO = e.target.value;
var IDI = e.target.name;

axios.get('http://localhost:3005/orders/'+IDO)
      .then(res =>{
        console.log(res);
        this.setState({Instruments: res.data.order})
      }).then(res =>{
     
const Product ={
  name: this.state.Instruments.product.name,
  description: this.state.Instruments.product.description ,
  quantity: this.state.Instruments.quantity + this.state.Instruments.product.quantity,
  dataSheet:this.state.Instruments.product.dataSheet,
             }

      axios({
        method: 'patch',
        url: "http://localhost:3005/Products/"+IDI,
        headers: {
      'Authorization': 'Bearer '+Token,
        },
            data: {Product}
        }).then(res =>{
                console.log(res.data.message);
          
      axios({
        method: 'delete',
        url: "http://localhost:3005/orders/"+IDO,
        headers: {
          'Authorization': 'Bearer '+Token,
        },
      })
      .then(res =>{
        console.log(res.data.message);
        window.location.href = "/Orders";
      })
     
    })
  })
}
  

  
    componentDidMount(){
       
    axios.get('http://localhost:3005/orders')
    .then(res =>{
      console.log(res);
      this.setState({ Orders: res.data.orders })
    })
  }
    render()
    {  
        const {Orders} = this.state;
        const post = Orders.map(O=>{
          return(

  <tr key ={O._id}>
    <td>{O.ordername}</td>
    <td>{O.rollNo}</td>
    <td>{O.product.name}</td>
    <td>{O.quantity}</td>
    <td>{O.mobileno}</td>
    <td> {O.Email}</td>
    <td> <button onClick={this.HandleClick} value={O._id} name ={O.product._id}>Return</button></td>
  </tr>
          )
        })
      return(
 <div  style={{padding:'2em'}}>

      <table id="customers">
                <tr>
                  <th>Name </th>
                  <th>Roll No</th>
                  <th>Instrument</th>
                  <th>Quantity</th>
                  <th>Mobile No</th>
                  <th>Email</th>
                  <th>Item Returned</th>
                </tr>
           {post}

       </table>       
        </div>
        );
    }

  }
  export default Orders


  // axios({
  //   method: 'patch',
  //   url: "http://localhost:3000/products/"+ _id,
  //   headers: {
  // 'Authorization': 'Bearer '+Token,
  //   },
  //       data: {Product}
  //      })
  //         .then(res =>{
  //           console.log(res);


  //         axios({
  //           method: 'delete',
  //           url: "http://localhost:3000/orders/"+id,
  //           headers: {
  //             'Authorization': 'Bearer '+Token,
  //           },
  //         })
  //               .then(res =>{
  //                 alert(res.data.message);
  //                 window.location.href = "/Orders";
  //                     })
  //    })