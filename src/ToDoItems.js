import React, { Component } from 'react';


class ToDoItems extends Component{
    /*createTasks(tasks) {
        // debugger;
        console.log(tasks);
        return <li >{tasks}</li>
      }*/
      constructor(props) {
        super(props);
        this.state = {
            tft: ''
        }
        // this.delete = this.delete.bind(this);
      }

      delete = (key) => {
          
        this.props.delete(key);
      }

      render(){
        const toDoEntries = this.props.entries;
        const listItems = toDoEntries.map((tasks) => {
            console.count("rendered");
            return (<>
                    <li key={tasks}>{tasks}</li>
                    <button onClick={() => {this.delete(tasks)}} >Delete Task</button>
                    </>)
                    
        });

        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default ToDoItems;