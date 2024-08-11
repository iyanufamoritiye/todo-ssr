// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addTodo, editTodo } from "../redux/todoSlice";

// const TodoForm = ({ initialTodo }) => {
//   const [title, setTitle] = useState("");
//   const [completed, setCompleted] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (initialTodo) {
//       setTitle(initialTodo.title);
//       setCompleted(initialTodo.completed);
//     }
//   }, [initialTodo]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (initialTodo) {
//       await dispatch(
//         editTodo({
//           id: initialTodo.id,
//           title,
//           completed,
//         })
//       );
//     } else {
//       await dispatch(
//         addTodo({
//           title,
//           completed,
//         })
//       );
//     }
//     setTitle("");
//     setCompleted(false);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-4 p-4 border-2 mt-12 bg-gray-300 rounded w-full sm:w-2/3 lg:w-1/2 mx-auto"
//     >
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Todo title"
//         className="border p-2 w-full text-black"
//         required
//       />
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={completed}
//             onChange={() => setCompleted(!completed)}
//             className="mr-4"
//           />
//           Completed
//         </label>
//       </div>
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//         {initialTodo ? "Update Todo" : "Add Todo"}
//       </button>
//     </form>
//   );
// };

// export default TodoForm;

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/todoSlice";

const TodoForm = ({ initialTodo, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (initialTodo) {
      setTitle(initialTodo.title);
      setCompleted(initialTodo.completed);
    }
  }, [initialTodo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (initialTodo) {
      await dispatch(
        updateTodo({
          id: initialTodo.id,
          title,
          completed,
        })
      );
    } else {
      await dispatch(
        addTodo({
          title,
          completed,
        })
      );
    }
    setTitle("");
    setCompleted(false);
  };

  // useEffect(() => {
  //   if (initialTodo) {
  //     setTitle(initialTodo.title);
  //     setCompleted(initialTodo.completed);
  //   }
  // }, [initialTodo]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (initialTodo) {
  //     await dispatch(
  //       updateTodo({
  //         id: initialTodo.id,
  //         title,
  //         completed,
  //       })
  //     );
  //   } else {
  //     await dispatch(
  //       addTodo({
  //         title,
  //         completed,
  //         id: initialTodo.id,
  //       })
  //     );
  //   }
  //   setTitle("");
  //   setCompleted(false);
  // };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 border-2 mt-12 bg-gray-300 rounded w-full sm:w-2/3 lg:w-1/2 mx-auto"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo title"
        className="border p-2 w-full text-black"
        required
      />
      <div>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
            className="mr-4"
          />
          Completed
        </label>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {initialTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default TodoForm;
