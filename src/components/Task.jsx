const Task = ({ title }) => {

  return (
    <div className="flex items-center justify-between border-b border-solid py-3 border-gray-300 ">
      <div
        className={`flex items-center gap-5 text-gray-300 text-2xl font-normal flex-grow 
          `}
      >
        <input
          type="checkbox"
          name={title}
          value={title}
        />
        <label htmlFor="trial">{title}</label>

      </div>
      <div className="flex items-center gap-3">
        <button

          className="bg-red-600 px-2 text-gray-300 text-sm py-1"
        >
          <span>Delete</span>
        </button>
        <button

          className="bg-blue-600 px-3 text-gray-300 text-sm py-1"
        >
          <span>Edit</span>
        </button>
      </div>
    </div>
  );
};

export default Task;
