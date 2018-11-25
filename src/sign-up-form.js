import React from 'react';
import ReactDOM from 'react-dom';
import './sign-up-form.css';
import Login from './log-in-form';

class Start extends React.Component{
    
    constructor(){
        super();
         
        this.moveToLogInForm = this.moveToLogInForm.bind(this);
    }
    moveToLogInForm=()=>
    {
        ReactDOM.render(<Login/>,document.getElementById('root'));
    }
    render ()
    {
        return(
        <div class="form"  onsubmit="check()">
            <form name ="form1">
                <h1>Register</h1>
                <br></br>
                <label>Username</label> <input type="text" id="1" name="usernam"></input>
                <label>E-mail</label>  <input type="text" id="2"name="email"></input>
                <label>Password</label>   <input type="password"  id="3" name="passwrd" method="post" ></input>
                <label>Re-enter passowrd</label>  <input type="password"  id="4" name="repass"></input>
                <input type="submit" value="submit"></input>
                 
                <br></br><br></br><br></br>
                 <label>Already have an account ?</label> <a onClick={this.moveToLogInForm}>log in</a>
            </form>

        </div>
        );
    }

}
export default Start;
 
 