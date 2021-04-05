import React, { Component } from 'react';
import './Task.css';

class Task extends Component {

    render() {
        return (
            <div className="task">
                <div className="taskControls">
                    <input type="checkbox" onChange={this.props.completeTask.bind(this, this.props.task)}></input>
                    <input type="button" value="X"></input>
                </div>
                <div className="taskInfo">
                    <h2>{this.props.task.name}</h2>
                    <p>{this.props.task.description}</p>
                </div>
            </div>
        );
    }
}

export default Task;
