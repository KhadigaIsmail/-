import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './list';
//import * as serviceWorker from './serviceWorker';

class Todolist extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state =
    {

      valueoftextbox:'M',
      //making an object of the list in order to call a spesific function in the list class
      obj : new List(),
      //dah variable 3adi bs bagarab el state :)
      count :"A7la To Do List Fi El Donia "
    }
  }
   //here i render the textbox and the add button  
  render()
  {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <input type="text" id = "textbox"></input>
        <button onClick={this.state.obj.newnode}>Add</button>
        <List />
      </div>
    );
  }
}
/*function nadi_3ala_aboya()
{
  var arr = [] ;
  arr.concat("yala ya 2a5oya");
  console.log(this.state.arr);
}
setInterval(nadi_3ala_aboya , 1000);*/
ReactDOM.render(<Todolist/>,document.getElementById('root'));
    
    
    
    
