import React from "react";

export default function TodoItem({ entry }) {
  return (
    <div className=" flex p-4 bg-gray-500 my-3 rounded-lg shadow-xl">
      <ul className="w-full">
        {entry && 
          entry.map(({id, text }) => {
            return (
              <>
                <li className="flex w-full" key={id}>
                  <p className="flex w-full">{text} </p>
                  <input className="h-6 w-6 m-2" type="checkbox" name="checkbox" id="checkbox" />
                </li>
              </>
            )
        })}
      </ul>
      
    </div>
  )
}
  