import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";

const TaskPage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let styles = {
    container:
      "grid grid-cols-1 sm:w-full md:grid-cols-2 lg:grid-cols-3 gap-2 px-5 py-3",
    btnAddTask:
      "text-white text-center text-xl mx-5  hover:no-underline hover:text-white bg-pink-500 px-5 py-1 rounded-md shadow-sm",
  };

  if (tasks.length === 0) {
    return <h1>No tasks</h1>;
  }

  return (
    <div className="pt-3 min-h-screen">
      <div className="flex justify-center align-middle">
        <Link to={"/add-task"} className={` ${styles.btnAddTask} `}>
          New task
        </Link>
      </div>

      <div className={styles.container}>
        {tasks.map((task, index) => (
          <TaskCard task={task} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
