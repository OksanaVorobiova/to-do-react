import ToDo from "../ToDo";
import { Component } from "react";

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        text: "Clean the house",
        completed: false,
      },
      {
        id: 2,
        text: "walk a dog",
        completed: false,
      },
      {
        id: 3,
        text: "make a dinner",
        completed: false,
      },
    ],
  };

  deleteTask = (taskID) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskID),
    }));
  };

  render() {
    const { tasks } = this.state;
    const completedQuantity = tasks.reduce(
      (acc, task) => (task.completed ? (acc += 1) : acc),
      0
    );

    const inProgressQuantity = tasks.length - completedQuantity;

    return (
      <>
        <p>Tasks in total: {tasks.length}</p>
        <p>Tasks done: {completedQuantity}</p>
        <p>Tasks in progress: {inProgressQuantity}</p>
        <ToDo tasks={tasks} onDeleteTask={this.deleteTask}></ToDo>;
      </>
    );
  }
}

export default App;
