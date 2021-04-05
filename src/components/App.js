import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks';


class App extends Component {

    state = {
        tasks: []
    }

    addTask = (task) => {
        this.setState({tasks: [...this.state.tasks, task]});
    }

    removeTask = (task) => {
        return;
    }

    completeTask = (task) => {
        for (let i of this.state.tasks) {
            if (i.id === task.id) {
                i.done = (i.done) ? false : true;
            }
        }
    }

    render() {
        return (
            <div className="app">
                <button onClick={this.addTask.bind(this, {id:this.state.tasks.length, done: false, name: "Test", description: "Testing this"})}>Add A Task</button>
                <Tasks taskList={this.state.tasks} removeTask={this.removeTask} completeTask={this.completeTask}/>
            </div>
        );
    }
}

export default App;