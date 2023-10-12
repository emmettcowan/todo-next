import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function TodoItem({ entry, handleDelete }) {
  return (
    <div className="flex p-4 bg-gray-500 my-3 rounded-lg shadow-xl">
      <ul className="w-full">
        {entry &&
          entry.map(({ id, text }) => (
            <li key={id} className="flex w-full">
              <p className="flex w-full">{text}</p>
              <input className="h-6 w-6 m-2" type="checkbox" name="checkbox" id="checkbox" />
              <button className="h-6 w-6 m-2" onClick={() => handleDelete(id)}>
                <RiDeleteBin6Line size={25} color="red" />
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}
