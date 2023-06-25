import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const App = () => {
  // states for tasks
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // add tasks ftn
  const addTasks = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // delete task ftn
  const deleteTasks = (index) => {
    const updatedList = [...tasks];
    updatedList.splice(index, 1);
    setTasks(updatedList);
  };

  return (
    // main div
    <div className=" flex flex-col items-center  bg-slate-200">
      {/* main heading */}
      <h1 className=" text-4xl mt-20 mb-8 mx-10 font-bold ">Simple Todo App</h1>

      {/* todo div */}
      <div className="bg-white rounded-md mb-80 shadow-lg ">
        <div className="p-6">
          {/* todo input */}
          <input
            className=" bg-slate-200 rounded-full px-6 py-4 m-3 shadow-lg"
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            placeholder="Create a new todo"
          />

          {/* add todo button */}
          <button
            onClick={addTasks}
            className=" bg-red-500 text-white px-4 py-3 m-3 rounded-full font-bold hover:bg-red-600 shadow-red-200 shadow-lg"
          >
            Add Tasks
          </button>
        </div>

        {/* show all task list */}
        <div className="pb-4">
          {tasks?.length > 0 ? (
            <ul>
              {tasks.map((task, index) => (
                <div
                  className=" flex bg-slate-100 m-6 py-4 pl-12 pr-4 rounded-full shadow-lg"
                  key={index}
                >
                  <li className="self-center font-semibold pr-10 mr-6 grow">
                    {task}
                  </li>

                  {/* delete task button in list */}
                  <AiFillDelete
                    onClick={() => {
                      deleteTasks(index);
                    }}
                    size={28}
                    className="text-red-500 mr-2  hover:text-red-600 "
                  />
                </div>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center mb-6">
              <p className="font-medium">No Task Found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
