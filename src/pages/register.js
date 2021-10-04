import React,{component} from "react";
class RegisterPage extends component{
    constructor(props){
        super(props);
        this.state={
            first_name :'',
            last_name  :'',
            email_id  :'',
            gender   : '',
            date_of_birth :'',
            address : '',
            city :'',
        }
    }

    onHandleInput =(event) =>{
console .log(event.target.value)
this.setState({
    [event.target.name]: event.target.value
})
    }
    onCreateAccount(){

        console.log(this.state)

    }

    render(){
        return(
            <div>
                <h1>RegisterPage</h1>
                <div className="bottom-space"       >
                    <label className="lable-Text"          >Enter First Nmae</label>
                    <input className="input-space"                  type ="text" placeholder="please enter your first name."

                    onChange={this.onHandleInput} name="first_name"/>

                </div>
                <div className="bottom-space">
                    <label className ="label-Text">Enter last Name :</label>
                    <input className="input-space" type="text" placeholder ="please enter your last name"
                    onChange={this.onHandleInput} name="last_name"        />

                </div>
                <div className="bottom-space">
                    <label className ="label-Text">Enter Email ID :</label>
                    <input className="input-space" type="text" placeholder ="please enter your email id"
                    onChange={this.onHandleInput} name="email_id"        />

                </div>
                <div>
                    <labe className="label-Text"     >select your gender:</labe>
                    <input className="font"  type="radio" name="gender" onChange={this.onHandleInput  }  value="Male"   />Male
                    <input className="font"  type="radio" name ="gender" onChange={this.onHandleInput}  value="Female"      />Female
                    <input className="font"  type="radio" name="gender"  onChange={this.onHandleInput} value="Others"      />Others
                </div>
                <div className ="bottom-space"      >
                    <label className="label-text"        >select your DOB</label>
                    <input type="date" className ="input-space"  onChange={this.onHandleInput} name="date_of_birth"         />
                </div>
                <div className ="bottom-space center_text "     >
                    <label className="label-text"        >enter your address</label>
                     <textarea placeholder ="please enter your address"  className="input-space" onChange={this.onHandleInput} name="address"   ></textarea>           
                </div>
                <div className ="botton-space center -text">
                    <labe className="label-Text">select your city</labe>
                    <select className ="input-space" onChange={this.onHandleInput} name="city"         >
                        <option>please select any city</option>
                        <option>chennai</option>
                        <option>mumbi</option>

                        <option>Banglore</option>
                        <option>Delhi</option>
                    </select>

                </div>
                <button className="create-btn" onClick={()=>this.onCreateAccount()}      >Create Account</button>

            </div>
        )
    }
}
export default RegisterPage;
