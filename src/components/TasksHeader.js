import { useSelector } from "react-redux";

const TasksHeader = () => {
  const tasks = useSelector((state) => state.todo);
  const undoneTasks = tasks.filter((t) => t.done === false);

  return (
    <header>
      <h1>React Todo List</h1>
      <p>
        Tasks to do : <strong>{undoneTasks.length}</strong>
      </p>
      <hr />
    </header>
  );
};

export default TasksHeader;
