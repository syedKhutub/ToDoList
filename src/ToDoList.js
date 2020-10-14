import React, { Component } from 'react';
import ToDoItems from './ToDoItems'

class ToDoList extends Component {
    constructor() {
        super();
       
        this.state = {
            tasks: [],
            value: ''
            // key: ''
        };
        // this.deleteItem = this.deleteItem.bind(this);
      }
      
    handleChange  = (event) => {
      
        let updatedInputFieldValue = {...this.state.value}
        updatedInputFieldValue = event.target.value;
        this.setState({value : updatedInputFieldValue});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        let addTaskFromValue = JSON.parse(JSON.stringify(this.state));
        if (addTaskFromValue.value !== '') {
            // addTaskFromValue.tasks.push(addTaskFromValue.value);
            // let tasks = addTaskFromValue.tasks;
            // let newTask = {
            //     tasks: tasks,
            //     key: Date.now()
            // }
            addTaskFromValue.tasks.push(addTaskFromValue.value);
            let tasks = addTaskFromValue.tasks;
            addTaskFromValue.value = !isNaN(addTaskFromValue.value)?  parseInt(addTaskFromValue.value) + 10 : "";
            // addTaskFromValue.value = "";
            // let key = Date.now();
            this.setState(() => ({
                tasks: tasks,
                value: addTaskFromValue.value
              }));
        }
        console.log(this.state.tasks)
        
    }

    deleteItem = (key) =>  {
        const filteredItems = this.state.tasks.filter( (tasks) => {
          return (tasks !== key);
        });
       debugger;
        this.setState({
          tasks: filteredItems
        });
        
        console.log(this.state)
      }
    
    // masterSubmit = (e,x) => {
    //     debugger;
    //     console.log(x);
    //     this.handleSubmit(e,x)
    // }
    render(){
        return (
        
             <div className="todolistmain"> 
                 <div className="header">
                    <h1> To Do List</h1>
                 </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Task" onChange={this.handleChange} value={this.state.value}/>
                    <button type="submit">add</button>
                </form>
                <ToDoItems entries={this.state.tasks}
                            delete={this.deleteItem}/>

             </div>   
        );
    }
    
}

export default ToDoList;