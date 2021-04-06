import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

    state = {
        taskName: "",
        taskDescription: ""
    }

    submitTask = (e) => {
        let name = this.state.taskName;
        let description = this.state.taskDescription;
        this.props.addTask(name, description);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submitTask} className="taskForm">
                <div>
                    <input onChange={e => this.setState({taskName: e.target.value})} id="inputName" type="text" placeholder="Name Of Your Task" autoComplete="off" spellcheck="false"/>
                    <input onChange={e => this.setState({taskDescription: e.target.value})} id="inputDescription" type="text" placeholder="Description Of Your Task" autoComplete="off" spellcheck="false"/>
                </div>
                <div>
                    <input type="button" value="Add Task" onClick={this.submitTask}/>
                </div>
            </form>
        );
    }
}

export default Form;
