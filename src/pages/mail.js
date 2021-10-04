import  React ,  {Component}  from "react";
import {Switch, Route ,NavLink} from 'react-router-dom';
import Inbox from "./inbox-page";
import Sent from "./sent-page";
import Trash from "./trash-page";
import Draft from "./draft-page";
class Mail extends Component {

    render(){
        return(
            <div ClassName="main-content" >
                <div ClassName="header"     ></div>
                <div ClassName="body"      >
                    <div ClassName="sidebar"       >
                        <NavLink className ="btn" activeclassName="active-btn"      to="/mail/inbox"     >Inbox page</NavLink>
                        <br/>
                        <NavLink className="btn" activeclassName="active-btn"           to ="/mail/Sent">Sent page</NavLink>
                        <br/>
                        <NavLink className="btn" activeClassName="active-btn"           to ="/mail/Trash">Trash page</NavLink>
                        <br/>
                        <NavLink  className="btn"  activeclassName="active-btn"           to ="mail/Draft">Draft page</NavLink>
                        <br/>
                    </div>
                    <div ClassName="content"      >
                       <div ClassName= "pages" > 
                      {/*Here page*/}
                      <switch>
                          <Route  path ="/mail/inbox" Component ={Inbox}                 ></Route>
                          <Route  path="/mail/sent"   Component={Sent}              ></Route>
                          <Route   path="/mail/trash"   Component={Trash}                                ></Route>
                          <Route    path="/mail/draft"    Component={Draft}                                    ></Route>
                      </switch>




        </div> 
                        <div ClassName="footer">         </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mail;