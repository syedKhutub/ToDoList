import React, { Component } from 'react';
import ToDoItems from './ToDoItems';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

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
        this.setState({
          tasks: filteredItems
        });
        
      }
    
    
    render(){
        return (
            <Grid className='todolistmain'>
              
                  <div className="header">
                      <h1> Customer Reviews</h1>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                      <Input type="text" 
                            placeholder="Add Review" 
                            onChange={this.handleChange} 
                            value={this.state.value}/>

                      <Button type="submit"
                        variant="contained"
                        color="primary"
                        size="small"
                        > Add
                      </Button>
                  </form>
                  <ToDoItems entries={this.state.tasks}
                              delete={this.deleteItem}/>

             </Grid>   
        );
    }
    
}

export default ToDoList;