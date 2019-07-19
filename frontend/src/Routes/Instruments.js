import React, {Component} from 'react';
import axios from 'axios';
import {Card, CardTitle, CardText, Button, CardActions, Dialog, DialogTitle, DialogActions, DialogContent} from'react-mdl'
import dialogPolyfill from 'dialog-polyfill'
let Token= sessionStorage.getItem("TokenKey");
console.log(Token);
class Instruments extends Component{

    state = {
        Instruments: [],
        count:'',
        Quant: '',
        Descr: '',
        Name:'',
        Id:'',
        openDialog: false,

    }

    componentDidMount(){
    axios.get('http://localhost:3005/products')
    .then(res =>{
      console.log(res);

      this.setState({Instruments: res.data.products,count: res.data.count})
    })
    }
    HandleDelete = (e)=>{
      var id= e.target.value;
      axios({
        method: 'delete',
        url: "http://localhost:3005/products/"+id,
        headers: {
          'Authorization': 'Bearer '+Token,
        },
      })
      .then(res =>{
        alert(res.data.message);
        window.location.href = "/Instruments";
      })
     
    }
    // HandleModal = (e)=>{
    //   this.setState({isOpen: true})
    //    this.setState({Quant:e.target.dataset.quantity_, Descr: e.target.value, Name:e.target.name, Id: e.target.key});
    // }

    HandleUpdate =(e)=>{
      var id = e.target.value;
      sessionStorage.setItem('ID', id);
      window.location.href = "/editProduct";
    }

    HandleOrder=(e)=>{
      var id = e.target.value;
      sessionStorage.setItem('ID', id);
      window.location.href = "/OrderForm";
    }

    handleOpenDialog=(e)=> {
    
      this.setState({openDialog: true})
       this.setState({Quant:e.target.dataset.quat_, Descr: e.target.value, Name:e.target.name, Id: e.target.key});
      

    }
  
    handleCloseDialog =(e)=> {
      this.setState({
        openDialog: false,
        Quant: '',
        Descr: '',
        Name:'',
        Id:'',
      });
    }
    
    render()
    {    
        const {Instruments}= this.state;
       
        const post = Instruments.map(Instrument=>{
          return(
            
            <div style={{padding:'2px'}}>
              
            

            <Card key={Instrument._id} shadow={5} style={{width: '320px', height: '120px', margin: 'auto'}}>
            <CardTitle expand className = "Card-Background" style={{color: '#D3D3D3'}}>{Instrument.name}</CardTitle>
            <CardText>
             Quantity: {Instrument.quantity}
            </CardText>
            <CardActions border>
            <Button colored onClick={this.HandleOrder} value={Instrument._id} >Issue</Button>
            <Button colored onClick={this.HandleUpdate} value={Instrument._id} >Edit </Button>
            {/* <button onClick={this.HandleDelete} value={Instrument._id} >Delete Product</button> */}

            <Button colored onClick={this.handleOpenDialog} value={Instrument.description} key={Instrument._id} data-quat_={Instrument.quantity} Name={Instrument.name}>More Info.</Button>
          
            </CardActions>
            </Card>

             </div>
          )
        })
            return(
             <div>
            <div  className='flex-container'>
           
            {post}
            
            </div>
            <div>
            <Dialog open={this.state.openDialog}>
          <DialogTitle>{this.state.Name}</DialogTitle>
          <DialogContent>
            
            <p><h4> Quantity: {this.state.Quant }</h4>{this.state.Descr}</p>
          </DialogContent>
          <DialogActions>
            <Button colored onClick={this.HandleOrder} value={this.state.ID} >Issue</Button>
            <Button colored onClick={this.HandleUpdate} value={this.state.ID} >Edit </Button>
            <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
          </DialogActions>
            </Dialog>
            </div>
            </div>
        );
            }
           
             
                       
    
          }
  
  export default Instruments
