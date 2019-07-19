import React, {Component} from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Home from './Home';
import Instruments from './Instruments';
import Orders from './Orders'
import AddPro from './AddPro'
import login from './login'
import Edit from './editproduct'
import OrderF from './OrderForm'
class Routes extends Component {
render()
{   return(
    <BrowserRouter>
    <Switch>
    <Route path ="/" exact component={Home} />
    <Route path ="/Instruments" exact component={Instruments}/>
    <Route path ="/Orders" exact component={Orders}/>
    <Route path ="/AddPro" exact component={AddPro}/>
    <Route path ="/Login" exact component={login}/>
    <Route path ="/editProduct" exact component={Edit}/>
    <Route path ="/OrderForm" exact component={OrderF}/>
    </Switch>
    </BrowserRouter>
    );
}
}
export default Routes