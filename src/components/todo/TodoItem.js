import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function TodoItem({ entry, handleDelete }) {
  return (
    <div className="my-3">
      <ul className="grid  gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {entry &&
          entry.map(({ id, text }) => (
            <li key={id} className="font-bold bg-yellow-200 rounded-md p-2 shadow-xl">
              <div className="flex flex-col text-left flex-grow">
                <p className="text-lg text-zinc-700 m-3">{text}</p>
                <p className="text-zinc-500 text-lg font-light break-words ml-3">Sample text for description Sample text for description Sample text for description </p>
              </div>
              <div>
                <button className="m-3" onClick={() => handleDelete(id)}>
                  <RiDeleteBin6Line size={25} color="red" />
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}
