import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm'
import DeleteTask from './DeleteTask'
import OneTask from './OneTask';

class ListBoard extends Component {
    constructor() {
        super()
        this.state = { tasks: [] }
    }

    addTaskHandler = (theTask) => {
        const tasksCopy = [...this.state.tasks];
        tasksCopy.push(theTask);
        this.setState({
            tasks: tasksCopy
        })

    }
    removeTaskHandler = (idx) => {
        console.log('test')
        const tasksCopy = [...this.state.tasks];
        tasksCopy.splice(idx, 1)
        this.setState({
            tasks: tasksCopy
        })
        console.log(this.state.tasks)
    }

    render() {
        return (
            <div>
                Here goes the list
                <AddTaskForm addTheTask={this.addTaskHandler} />
                {this.state.tasks.map((task, idx) => {
                    return (
                        <ul>
                            <OneTask idx={idx} removeTheTask={this.removeTaskHandler} value={task} />
                        </ul>
                    )
                })}
            </div>
        )
    }
}

export default ListBoard

