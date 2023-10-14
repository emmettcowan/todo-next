"use client"
import React from "react";
import TodoItem from "./TodoItem";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import db from "../../app/firestore";
import { v4 as uuidv4 } from 'uuid';


async function DbFetchHandler(user) {
  const snapshot = await getDocs(collection(db, user));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

async function DbDeleteHandler(user, id) {
  const todoDocRef = doc(db, user, id);

  try {
    await deleteDoc(todoDocRef);
    console.log("Document successfully deleted!");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}
const data = { id: 3, text: "ToDo Item 1" };


async function DbUpdateHandler(user, data) {
  const todoDocRef = doc(db, user, data.id.toString());

  try {
    await setDoc(todoDocRef, data);
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
}

export default function Todo({ session }) {
  const [newTodo, setNewTodo] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);

  const userImage = session.user.image;
  const userName = session.user.name;

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await DbFetchHandler(userName);
        setTodoList(data);
      }
      catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (newTodo.length !== 0) {
      setTodoList([...todoList, { id: uuidv4(), text: newTodo }]);
      DbUpdateHandler(userName, { id: uuidv4(), text: newTodo });
    }

    setNewTodo("");
    event.target.reset();
  }

  function handleDelete(id) {
    setTodoList(todoList.filter((item) => item.id !== id));
    DbDeleteHandler(userName, id);
  }

  return (
    <div className="grid grid-cols-1 m-5 px-20">
      <div className="p-4 bg-gray-400 rounded-lg shadow-xl">
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
      {todoList.length > 0 && <TodoItem entry={todoList} handleDelete={handleDelete} />}
    </div>
  );
}
