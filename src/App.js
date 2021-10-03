import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks";

function App() {
  const [tasks,setTasks] = useState([
      {
          id: 1,
          text: "Task is First 1",
          day: 'October 2, 2021',
          reminder:true
      },
      {
          id: 2,
          text: "Task is First 2",
          day: 'October 4, 2021',
          reminder:true
      },
      {
          id: 3,
          text: "Task is First 3",
          day: 'October 6, 2021',
          reminder:true
      },
  ])

  //Delete task
  // const deleteTask = (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id ))
  // }
  const deleteTask = (id) => {
    console.log(id)
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}


export default App;
