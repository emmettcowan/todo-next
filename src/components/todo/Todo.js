"use client"
import React from "react";
import TodoItem from "./TodoItem";

const todoList = [];

export default function Todo() {

  const [newTodo, setNewTodo] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (newTodo.length !== 0) {
      todoList.push({ id: todoList.length + 1, text: newTodo });
    }
    setNewTodo("");
    event.target.reset();
  }

  return (
    <div className="grid grid-cols-1">
      <div className="p-4 bg-gray-500 rounded-lg shadow-xl">
        <div className="flex">
          <form className=" w-screen" onSubmit={handleSubmit}>
            <input className=" w-full px-3 py-3 placeholder-gray-400 text-gray-700
            bg-gray-200 border rounded-lg shadow-sm" type="text"
              name="name" id="name" placeholder="ToDo Item" defaultValue="" onChange={(e) => setNewTodo(e.target.value)} />
            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800
            text-gray-200 mt-3 font-bold py-2 px-4 rounded-md
            active:bg-blue-800">
              Add
            </button>
          </form>
        </div>
      </div>
      {todoList.length > 0 && <TodoItem entry={todoList} />}
    </div>
  );
}
