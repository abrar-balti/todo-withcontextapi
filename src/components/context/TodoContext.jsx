import { useState } from "react";
import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      todoMesg: "Go to gym",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, newdo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const UseTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  //add todo
  const addTodo = (todoText) => {
    console.log("hello inside add");

    const newTdo = {
      id: Date.now(),
      todoMesg: todoText,
      completed: false,
    };
    setTodo((prevTodo) => {
      return [...prevTodo, newTdo];
    });
  };

  //update todo
  const updateTodo = (id, newTodText) => {
    console.log("hello inside update");

    setTodo((prevTodo) => {
      return prevTodo.map((eachTodo) =>
        eachTodo.id === id ? { ...eachTodo, todoMesg: newTodText } : eachTodo
      );
    });
  };

  // delete todo
  const deleteTodo = (id) => {
    console.log("hello inside delete");

    setTodo((prevTodo) => {
      return prevTodo.filter((eachTodo) => eachTodo.id !== id);
    });
  };

  //toggleCompleted
  const toggleComplete = (id) => {
    console.log("hello inside toggle");

    //console.log(id);
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todo, setTodo, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};
