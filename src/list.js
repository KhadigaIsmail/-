import React from 'react';
//import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';

class List extends React.Component{

    constructor(){
        super();
        this.state={
            nodes: [],
            index : -1
         }
         this.newnode = this.newnode.bind(this);
        addnewnode : this.newnode();
        this.Dlt = this.Dlt.bind(this);
        this.Edt = this.Edt.bind(this);
    }
   componentDidMount() {
       //setInterval(this.newnode, 5000);
        // store intervalId in the state so it can be accessed later:
        
     }
     Dlt=(e)=>{
         this.setState((prevState)=> { 
             return{
                 
                 nodes : prevState.nodes.splice(this.state.nodes.indexOf(prevState.index),1),
                 index : prevState.index - 1  ,
                
            }
        })
     }
     Edt=(e)=>{
        
        this.setState((prevState)=> { 
            console.log (this.state.nodes.length);
            console.log(" ");
            console.log(this.state.index);
            return{
                
                //nodes : prevState.nodes.concat(<p>ayayayayaa</p>),
                
            }
        })

        
    }
    newnode=(e)=>{    
            
        this.setState((prevState)=> { 
            return{
                index : prevState.index +1  ,
                nodes : prevState.nodes.concat(<div><p>index = {this.index}</p>
                 <button onClick = {this.Dlt}>Delete</button>
                 <button onClick = {this.Edt}>Edit</button>
                 </div>)
                
            }
        })
        //alert(this.state.nodes);
        // document.getElementById('textbox').nodeValue="";
        //e.preventDefault();
    }
    render(){
        return(
            <div>
                {this.state.nodes}
            </div>
        );
    }
}

export default List;