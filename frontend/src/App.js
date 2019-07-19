import React, {Component} from 'react';
import {Layout, Header , Navigation, Drawer, Content} from 'react-mdl';
import Routes from './Routes/Routes.js';
import './App.css';

class App extends Component{
    render()
    {
      return (
        <div>
        <div className="demo-big-content">
    <Layout>
        <Header className = "header-color" title="EARL" scroll>
            <Navigation>
                <a href="/Instruments">Instruments</a>
                <a href="/Orders">Orders</a>
                <a href="/">Home</a>
    
            </Navigation>
        </Header>
        <Drawer title="EARL">
            <Navigation>
                <a href="/Instruments">Instruments</a>
                <a href="/Orders">Orders</a>
                <a href="/Login">Login</a>
                <a href="/AddPro">Add Product</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Routes/>
        </Content>
    </Layout>

</div>
        </div>
      );
    }
  }
  export default App
