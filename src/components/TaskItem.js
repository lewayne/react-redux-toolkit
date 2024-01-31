import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask, updateTask } from "../context/redux";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [currentTask, setCurrentTask] = useState(task.text);
  const [toggleChange, setToggleChange] = useState(true)

  const update = () => { 
    setToggleChange(!toggleChange)
  }

  const save = () => {
    setToggleChange(!toggleChange); 
    dispatch(updateTask({id: task.id, data: currentTask} ));
  };

  const data = toggleChange ? (
    <>
      <span>{currentTask} </span> <button onClick={update}>Update</button>
    </>
  ) : (
    <> 
      <input
        type="text"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)}
      />{" "}
      <button onClick={save}>Save</button>
    </>
  );

  return (
    <div>
      <label>
        {data}
        <input type="checkbox"
          checked={task.done}
          // onChange={() =>
          //   dispatch({
          //     type: "todo/toggleTask",
          //     payload: task.id,
          //   })
          // }
          onChange={() => dispatch(toggleTask(task.id))}
        />

        <span
          onClick={() => dispatch(deleteTask(task.id))}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          {" "}
          X{" "}
        </span>
      </label>
    </div>
  );
};

export default TaskItem;
