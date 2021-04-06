import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Tasks from './Tasks';


class App extends Component {

    state = {
        tasks: [],
        counter: 0
    }

    addTask = (name, description) => {
        let task = {
            id: this.state.counter,
            done: false,
            name: name,
            description: description
        }
        this.setState({tasks: [...this.state.tasks, task], counter: this.state.counter + 1});
    }

    removeTask = (task) => {
        this.setState({tasks: this.state.tasks.filter(taskElement => taskElement.id !== task.id)});
    }

    completeTask = (task) => {
        this.setState({tasks: this.state.tasks.map(taskElement => {
            taskElement.done = (taskElement.id === task.id) ? !taskElement.done : taskElement.done;
            return taskElement;
        })});
    }

    render() {
        return (
            <div className="app">
                {/* <button onClick={this.removeTask.bind(this, this.state.tasks[0])}>Remove A Task</button>
                <button onClick={this.completeTask.bind(this, this.state.tasks[0])}>Complete A Task</button> */}
                <Form taskList={this.state.tasks} addTask={this.addTask}/>
                <Tasks taskList={this.state.tasks} removeTask={this.removeTask} completeTask={this.completeTask}/>
            </div>
        );
    }
}

export default App;