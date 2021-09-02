import React, { Component } from "react";
import { Input, Button, Table } from "reactstrap";
class ToDoIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskEntry: "",
    };
  }

  taskHandler() {
    const task = {
      name: this.state.taskEntry,
      completed: false
    }
    this.setState({tasks: [...this.state.tasks, task]})
  }

  completeTask(e) {
    let updatedTasks = [...this.state.tasks]
    updatedTasks[e] = {...updatedTasks[e], completed: true}
    this.setState({
      tasks: updatedTasks,
    })
  }

  render() {
    return (
      <div>
        <div>
          <Input type="text" name="taskEntry" placeholder="Enter task ..." onChange={(e) => this.setState({taskEntry: e.target.value})} />
          <Button color="success" onClick={() => this.taskHandler()}>Create Task</Button>
        </div>
        <hr />
        <div>
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>Completed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map((t, index) => {
              return (
                <tr key={index}>
                <th>{index}</th>
                <td>{t.name}</td>
                <td>{t.completed.toString()}</td>
                <td>{!t.complete ? <Button value={index} color="success" onClick={(e) => this.completeTask(e.target.value)}>Complete Task</Button>: <></>}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        </div>
      </div>
    );
  }
}

export default ToDoIndex;
