import React,{Component} from "react";
import{NavLink} from 'react-router-dom';
class Home extends Component{
    render(){
        return(
            <div>
                <h1>this is front home page</h1>
                <NavLink to="/about-us">About page</NavLink>
                <br/>
                
                <NavLink to="/contact">Contact</NavLink>
                <br/>
                
                <NavLink to="/product">Product</NavLink>
                <br/>
                <NavLink to ="/mail">Mail page</NavLink>
                <br/>
                
            </div>
        )
    }
}
export default Home;