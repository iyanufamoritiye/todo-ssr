// export default EditTodo;
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axiosInstance from "../../../redux/axiosInstance";
import TodoForm from "../../../components/TodoForm";

const EditTodoPage = () => {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axiosInstance.get(`/todos/${id}`);
        setTodo(response.data);
      } catch (error) {
        setError("Todo not found");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchTodo();
  }, [id]);

  const handleSubmit = async (updatedTodo) => {
    try {
      await axiosInstance.put(`/todos/${id}`, updatedTodo);
      router.push("/todos"); // Redirect to the todo list page after successful update
    } catch (error) {
      setError("Failed to update todo");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4 relative">
      <button className="absolute left-4 top-0 bg-gray-400 mt-4 text-white p-2 px-4 rounded">
        <a href={`/todos`}>Back</a>
      </button>
      <h1 className="text-2xl font-bold mb-4 text-gray-950 text-center">
        Edit Todo
      </h1>
      <div>
        <TodoForm initialTodo={todo} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  try {
    const response = await axiosInstance.get(`/todos/${id}`);
    return { props: { todo: response.data } };
  } catch (error) {
    return { props: { todo: null } };
  }
}

export default EditTodoPage;
