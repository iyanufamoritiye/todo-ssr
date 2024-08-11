import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";
import { useRouter } from "next/router";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    router.push(`/todos/edit/${todo.id}`);
  };

  return (
    <div className="flex justify-between gap-4 p-4 border-2 mt-12 rounded w-full sm:w-2/3 lg:w-1/2 mx-auto">
      <div>
        <h2 className="text-xl font-bold">{todo.title}</h2>
        <p>{todo.completed ? "Completed" : "Not Completed"}</p>
        <p>ID: {todo.id}</p>
      </div>
      <div className="flex justify-center items-center  space-x-2">
        <a
          href={`/todos/${todo.id}`}
          className="bg-gray-500 text-white p-2 rounded"
        >
          View
        </a>

        <button
          onClick={handleEdit}
          className="bg-yellow-500 text-white p-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white p-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
