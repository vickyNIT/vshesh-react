import React ,{Component} from "react";
import axious from "axios";

class Sent extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            job:"",
        }
    }
    onHandleInput = (event) => {
        this.setState({
            [event.target.name] :event.target.value

        })

    }

    onSubmit(){
const url ="https://reqres.in/api/users";
    }


    render (){
        return(
            <div>
                <h1>This is a Sent page</h1>
                <div className="bottom-space"        >
                    <label className="lable-text"             >Enter your Name:</label>
                    <input type="text" placeholder="please enter a name"className="input-space"onChange={this.onHandleInput}name="name"      />
                </div>
                <div className="bottom-space"            >
                    <label className="lable-Text" >Enter your job desc :</label>
                    <input type ="text" placeholder="please enter a job desc" className="input-space" onChange={this.onHandleInput} name="job"   />
                </div>
                <button onClick ={() => this.onSubmit()        }   >submit</button>
            </div>
        )
    }
}
export default Sent;