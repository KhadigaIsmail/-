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
    //el function di bttnafez ba3d el render
   componentDidMount() {
       //setInterval(this.newnode, 5000);
        // store intervalId in the state so it can be accessed later:
        
     }
     // de function el delete eli btms7 el node eli heya feha
     Dlt=(e)=>{
         //el mafrod en array.splice btmsa7 element fee el array mo3ayan b el index bta3o
         // el index el mafrod y2l b wa7ed *i'm supposing*
         this.setState((prevState)=> { 
             return{
                 
                 nodes : prevState.nodes.splice(this.state.nodes.indexOf(prevState.index),1),
                 index : prevState.index - 1  ,
                
            }
        })
     }
     //to edit the node
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
    //i am creating a new node to append it to the to do list
    newnode=(e)=>{    
            //i retuen the array of nodes + a new node in it 
            // a node consisit of 2 buttons and a paragraph inside a div
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
    //i am rendering the array which contain all the nodes
    render(){
        return(
            <div>
                {this.state.nodes}
            </div>
        );
    }
}

export default List;