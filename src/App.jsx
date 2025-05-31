import React, { useEffect } from "react";
import TodoForm from "./components/todoform/TodoForm";
import TodoItem from "./components/todoitem/TodoItem";
import { UseTodoContext } from "./components/context";
function App() {
  const { todo, setTodo } = UseTodoContext();
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodo(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);
  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white ">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4 ">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todo.map((eachTodo) => (
              <div key={eachTodo.id} className="w-full">
                <TodoItem todo={eachTodo} />
              </div>
            ))}
            {/* <TodoForm /> */}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <h3 className="text-white ">
            Developed By: <span className="text-green-400">Abrar Balti</span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default App;
