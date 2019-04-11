import React, { Component } from 'react';

class AddTaskForm extends Component {
    constructor() {
        super()
        this.state = { task: '' }
    }
    handleInput = (e) => {
        this.setState({ task: e.target.value })
    }
    // The best place to make use of it inside handleFormSubmit() 
    //method because this method gets executed onSubmit, so whenever we 
    //are ready to push the new movie into the movies array.
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.addTheTask(this.state.task);
        this.setState({
            task: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type='text' name='task' value={this.state.task} onChange={(e) => this.handleInput(e)} />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}


export default AddTaskForm;