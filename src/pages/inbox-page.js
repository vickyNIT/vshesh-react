import React ,{Component} from "react";
import axios from "axios";

class Inbox extends Component {
    constructor(props){
        super(props);
        this.state={
            userList:[]
        }
    }
    listUser(){
        const url="https://reqres.in/api/users?page=2";

        axios.get(url)
          .then( (response )  =>{
              //success code block
              console.log(response.data)
              const serverData =response.data;
              console.log(serverData.data)

              this.setState({
                  userList: serverData.data
              })

              

              
          }            )
           .catch( (error)  =>{
               //error code block 
               console.log(error)
           }           )

    }
    render (){
        const user=this.state.userList.map((value,index)=>{

        return(
            <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.first_name}</td>
                            <td>{value.last_name}</td>
                            <td>{value.email}</td>
                            <td>
                                <img src={value.avatar} alt ={value.avatar} className="profile-image"/>
                            </td>
                        </tr>

        )

        })
        return(
            <div>
                <h1>This is a inbox page</h1>
                <button onClick={() => this.listUser()      }            >list all users</button>
                <table id="customers"         >
                    <thead></thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>profile picture</th>
                    </tr>
                    <tbody>
                        {user}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Inbox;