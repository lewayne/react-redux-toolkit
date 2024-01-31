import {  useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = () => { //{ toggleTask, deleteTask }
  const tasks = useSelector((state) => state.todo);

  return (
    <>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
        // toggleTask={toggleTask}
        // deleteTask={deleteTask}
      ))}

      <br />
      <hr />
    </>
  );
};

export default TasksList;
