import React from "react";
import { useState } from "react";
import { UseTodoContext } from "../context";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setisTodoEditable] = useState(false);
  const [toDoMesg, settoDoMesg] = useState(todo.todoMesg);

  const { updateTodo, deleteTodo, toggleComplete } = UseTodoContext();

  //edit todo function
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, toDoMesg: toDoMesg });
    setisTodoEditable(false);
  };
  const callToggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={callToggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={toDoMesg}
        onChange={(e) => settoDoMesg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setisTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
