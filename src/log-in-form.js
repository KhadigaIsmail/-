import React from 'react';
import ReactDOM from 'react-dom';
import './sign-up-form.css';
import Start from './sign-up-form';
import {Todolist} from './list'

class Login extends React.Component{
    
    constructor(){
    
        super();
        this.moveToSignUpForm = this.moveToSignUpForm.bind(this);
        this.moveToList = this.moveToList.bind(this);

    }
    moveToSignUpForm=()=>
    {
        ReactDOM.render(<Start/>,document.getElementById('root'));
    }
    moveToList=()=>{
        ReactDOM.render(<Todolist/>,document.getElementById('root'));
    }
    render ()
    {
        return(
        <div class="form"  onsubmit="check()">
            <form name ="form1">
                <h1>Log in</h1>
                <br></br>
                <label>Username</label> <input type="text" id="1" name="usernam"></input>
                <label>Password</label>   <input type="password"  id="3" name="passwrd" method="post" ></input>
                <input type="submit" value="submit" onClick={this.moveToList}></input>
                 
                <br></br><br></br><br></br>
                 <label>Don't have an account ?</label> <a onClick={this.moveToSignUpForm}>Sing up</a>
            </form>

        </div>
        );
    }

}
export default Login;
 
 