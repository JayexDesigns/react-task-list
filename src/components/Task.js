import React, { Component } from 'react';
import './Task.css';

class Task extends Component {

    styleDone = () => {
        return {
            borderColor: (this.props.task.done) ? "#00ccff" : "#ffffff",
            boxShadow: (this.props.task.done) ? "inset 0 0 1vh #00ccff, 0 0 1vh #00ccff" : "inset 0 0 1vh #ffffff, 0 0 1vh #ffffff",
        }
    }

    removeTask = () => {
        this.props.removeTask(this.props.task);
    }

    render() {
        return (
            <div className="task" style={this.styleDone()}>
                <div className="taskControls">
                    <input type="checkbox" checked={this.props.task.done} onChange={this.props.completeTask.bind(this, this.props.task)}></input>
                    <input type="button" value="X" onClick={this.removeTask}></input>
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
