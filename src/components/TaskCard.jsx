import { format, register } from "timeago.js";
import es from "timeago.js/lib/lang/es"; // Importa el archivo de locales en español
import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaPen, FaRegTrashAlt } from "react-icons/fa";

register("es", es); // Registra el locale en español

const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();
  return (
    <div className="w-full backdrop-container rounded-xl py-2 px-2 shadow-sm overflow-auto">
      <header className="flex justify-between items-center mb-1">
        <h1 className="h5 my-0">{task.title}</h1>

        <div className="flex px-2 gap-x-1">
          <button
            className="buttons text-xl bg-red-400 px-1 py-1 rounded-md text-white hover:bg-red-500  transition duration-300 ease-in-out"
            onClick={() => deleteTask(task._id)}
          >
            <FaRegTrashAlt />
          </button>
          <Link
            to={`/tasks/${task._id}`}
            className="bg-blue-400 text-xl px-1 py-1 rounded-md text-white hover:no-underline hover:bg-blue-500  transition duration-300 ease-in-out"
          >
            <FaPen />
          </Link>
        </div>
      </header>

      <p>{task.description}</p>
      <p className="text-sm text-zinc-600">
        {format(new Date(task.date), "es")}
      </p>
      {/* Utiliza el locale en español */}
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskCard;
