import React from 'react';
import './index.css';
//import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';

  

class Todolist extends React.Component
{

   constructor(props){
        super();
        this.state={
            //array of items in to do list
            items: [],
            textInTexbox : "",
            addItem : this.addItem.bind(this),
            deleteItem : this.deleteItem.bind(this),
            editItem : this.editItem.bind(this),
            //index variable to give ids for some elements
            index : 1,
            //if edit_bool is any aother value else 0 then i'm editing now - if = 0 then i'm adding
            edit_bool : 0,
            //button text
            add_Update : "Add",

        }
     
    }
  
    deleteItem=(e)=>{
       e.target.parentNode.remove();
    }
    editItem=(e)=>{

        document.getElementById("textbox").value=e.target.previousSibling.previousSibling.innerHTML;
        this.setState({edit_bool:e.target.previousSibling.previousSibling.id,
        add_Update : "Update"
        });
    }
    addItem=()=>{
        if(!this.state.edit_bool){
            this.state.textInTexbox = document.getElementById("textbox").value;
            this.state.textInTexbox.trim();

            if(this.state.textInTexbox)
            this.setState((prevstate)=>({items : prevstate.items.concat(
            <div  id = {this.state.index}>
                <p id={"p"+this.state.index}>{this.state.textInTexbox}</p>
                <button onClick={this.deleteItem}>Delete</button>
                <button onClick={this.editItem}>Edit</button>

            </div>
            )}));
            this.setState((prevstate)=>({index : prevstate.index+1}));

            document.getElementById("textbox").value="";
        }
        else{
            this.state.textInTexbox = document.getElementById("textbox").value;
            this.state.textInTexbox.trim();

            if(this.state.textInTexbox)
            document.getElementById(this.state.edit_bool).innerHTML=this.state.textInTexbox;
            document.getElementById("textbox").value="";
            this.setState({edit_bool:0, add_Update:"Add"});
        }

    }
    
   
    render()
    {
      return(
        <div class="toDoListHead">
          <div class = "" >
              <h1>To Do List</h1>
                <input type="text" id = "textbox"></input>
                <button onClick={this.addItem} >{this.state.add_Update}</button>
          </div>
          <div class ="">
               {this.state.items}
          </div>
        </div>
      );
    }
}


export default Todolist;