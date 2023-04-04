import { useSelector } from "react-redux";
import Task from "./Task";

const Form = () => {
  const tasks = useSelector((state) => state.tasks.value);
  return (
    <form className="m-5" onSubmit={(event) => event.preventDefault()}>
      {tasks.length > 0 ? (
        tasks.map((task) => <Task {...task} key={task.id} />)
      ) : (
        <h1 className="text-xl font-medium text-gray-400">
          Proper planning and preparation prevents poor performance. 💡
        </h1>
      )}
    </form>
  );
};

export default Form;
