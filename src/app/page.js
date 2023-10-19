import Image from "next/image";
import todoPic from "./public/todoApp.jpg";

export default function Home() {
  return (
    <main className="bg-gray-200  flex flex-col px-20 items-center h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 mt-24">
        <div>
          <p className="text-zinc-700 font-bold text-4xl mr-16">This is a simple app with a todo list</p>
          <p className="text-zinc-700 text-xl mt-12 mr-16 mb-16">Login to go to the dashboard and start adding tasks</p>
        </div>
        <Image
          src={todoPic}
          width={500}
          height={500}
          alt="Picture of Todo App" />
      </div>
    </main>
  )
}
