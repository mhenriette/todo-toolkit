import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  editTask,
  taskChecked,
  taskDelete,
  updateTask,
} from "../features/taskSlice";

const Task = ({ title, id, checked, editable }) => {
  const dispatch = useDispatch();
  const [updateText, setUpdateText] = useState(title);
  const updateTodo = () => {
    if (editable) {
      dispatch(updateTask({ text: updateText, id }));
    } else dispatch(editTask(id));
  };

  return (
    <div className="flex items-center justify-between border-b border-solid py-3 border-gray-300 ">
      <div
        className={`flex items-center gap-5 text-gray-300 text-2xl font-normal flex-grow ${
          checked && "line-through"
        }`}
      >
        <input
          type="checkbox"
          name={title}
          value={title}
          checked={checked}
          id={id}
          onChange={() => dispatch(taskChecked(id))}
        />
        {editable ? (
          <input
            name={updateText}
            value={updateText}
            type="text"
            onChange={(event) => setUpdateText(event.target.value)}
            className="bg-gray-600"
          />
        ) : (
          <label htmlFor="trial">{title}</label>
        )}
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(taskDelete(id))}
          className="bg-red-600 px-2 text-gray-300 text-sm py-1"
        >
          <span>Delete</span>
        </button>
        <button
          onClick={() => updateTodo()}
          className="bg-blue-600 px-3 text-gray-300 text-sm py-1"
        >
          <span>{editable ? "Save" : "Edit"}</span>
        </button>
      </div>
    </div>
  );
};

export default Task;
