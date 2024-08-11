export const todos = [
  {
    id: 1,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
  {
    id: 2,
    title: "vero rerum temporibus dolor",
    completed: true,
  },
  {
    id: 3,
    title: "ipsa repellendus fugit nisi",
    completed: true,
  },
  {
    id: 4,
    title: "et doloremque nulla",
    completed: false,
  },
  {
    id: 5,
    title: "repellendus sunt dolores architecto voluptatum",
    completed: true,
  },
];

let nextId = 6;

export const generateId = () => nextId++;
