import React, {Component} from 'react';
import {Grid, Cell } from'react-mdl'
class Home extends Component {

    render()
    {   return(
        
        <div style ={{width :'100%', margin:'auto'}}>
            <Grid className ="landing-grid">
            <Cell col={12}>
            <div className ="banner-text">
            <h1>About Us</h1>
            <hr/>
            <p>Electronics and Robotics lab (EARL) of UIET is a student run labratory that gives students of UIET an oppertunity to work on some interesting electronics and robotics projects. We have a lot of instruments available with us that can students and issue and use in their protoype projects.</p>
            </div>

            <div className ="banner-text2">
            <h1>How to issue instruments?</h1>
            <hr/>
            <p>To issue an instrument one would have to physically be present at the EARL lab, Block 2 UIET, Panjab University, Chandigarh. 
                You can see the instruments available in the LAB through the intruments page of this website and the information of the instruments that have currently been issued is also avialble on the website.
            </p>
            </div>

            
            <div className ="banner-text3">
            <h1>Tinkering Labs</h1>
            <hr/>
            <p>To issue an instrument one would have to physically be present at the EARL lab, Block 2 UIET, Panjab University, Chandigarh. 
                You can see the instruments available in the LAB through the intruments page of this website and the information of the instruments that have currently been issued is also avialble on the website.
            </p>
            </div>

            </Cell>
            </Grid>






   
        </div>
     
        );
    }
    }
    export default Home