import { useState } from "react";
import { useDispatch } from "react-redux";
import plus from "../assets/plus.svg";
import { addTask } from "../features/taskSlice";

import Form from "./Form";
const ToDo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleText = () => {
    if (text.length > 0 && text.trim().length !== 0) {
      const taskName =
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      dispatch(addTask(taskName));
      setText("");
    } else alert("The name of the task must be provided");
  };
  return (
    <div className="my-32 lg:w-1/2 text-center">
      <h1 className="text-gray-300 text-7xl font-bold my-10">todos</h1>
      <div className=" rounded-full px-5 bg-white  shadow-small w-full flex items-center justify-between">
        <input
          placeholder="Add your task..."
          type="text"
          className="flex-grow py-3 outline-none"
          name="taskName"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button>
          <img
            src={plus}
            alt="plus"
            className="w-8 h-8"
            onClick={() => handleText()}
          />
        </button>
      </div>
      <Form />
    </div>
  );
};

export default ToDo;
