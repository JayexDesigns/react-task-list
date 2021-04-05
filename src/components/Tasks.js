import React, { Component } from 'react';
import './Tasks.css'
import Task from './Task';

class Tasks extends Component {

    render() {
        return (
            <div className="taskList">
                {this.props.taskList.map(e => <Task key={e.id} task={e} removeTask={this.props.removeTask} completeTask={this.props.completeTask}/>)}
            </div>
        );
    }
}

export default Tasks;
