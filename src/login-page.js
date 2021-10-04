import React, {Component} from "react";

class LoginPage extends Component{

    constructor(props){
        super(props);
        this.state ={
            email : '',
            password :'',
        }
    }

    handleInput = (event) =>{
       console.log(event .target.value , event . target.name    )
       this.setState({

        [event.target.name] : event.target.value


        });

    }

    displayLogin(){

        console.log(this.state)

    }
    render(){
        return(
            <div>
                <h1    className="heading">welcome to login page</h1>
                <img src={require("./images/pranav s.png").default}  style={{'width': '250px'}}        />

                <img   className="car-img" src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg"/>


                <div  className="bottom-space"      >
                    <label className="lable-Text"        >Enter your email id :</label>
                    
                    
                    
                    <input type="email" placeholder ="plese enter your email id"
                    className="input-space"  onChange = {this.handleInput}  name="email"       />
                </div>
                <div className="bottom-space"                >
                    <labe className="lable-Text"         >Enter your password</labe>
                    <input type="password" placeholder="please enter your password"
                    className="input-space" onChange={this.handleInput}  name="password"       />
                </div>
                <div className="bottom-space"                   >
                    <button onClick ={() => this.displayLogin()        }   >Login</button>
                </div>

                <div>
                    <h2>the typed email is -{this.state.email}  </h2>
                    <h2>the typed password is -{ this.state.password}      </h2>
                </div>


            </div>
        )
    }
}
export default LoginPage;