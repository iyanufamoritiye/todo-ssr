import { todos } from "../../../lib/todos";

export default function handler(req, res) {
  const { id } = req.query;
  const todoIndex = todos.findIndex((todo) => todo.id === Number(id));

  switch (req.method) {
    case "GET":
      if (todoIndex > -1) {
        res.status(200).json(todos[todoIndex]);
      } else {
        res.status(404).json({ message: "Todo not found" });
      }
      break;
    case "PUT":
      if (todoIndex > -1) {
        todos[todoIndex] = { ...todos[todoIndex], ...req.body };
        res.status(200).json(todos[todoIndex]);
      } else {
        res.status(404).json({ message: "Todo not found" });
      }
      break;
    case "DELETE":
      if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Todo not found" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
