import { getServerSession } from "next-auth";
import Todo from "@/components/todo/Todo";
import Weather from "@/components/Weather";


export default async function Dashboard() {
  const session = await getServerSession();
  const userImg = session.user.image;

  if (session) return (
    <main className="flex  flex-col items-center p-5 h-screen">
      <div>
        <div className="flex flex-row text-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-zinc-700 ml-24 font-extrabold text-4xl">Hello, {session.user.name}</h1>
          </div>
          <img src={userImg} width="70" className="rounded-full ml-5" alt="user profile picture" />
        </div>
        <Todo session={session} />
        <Weather />
      </div>
    </main>
  );
  if (!session) return (
    <main className="flex  flex-col items-center p-5 h-screen">
      <h1 className="text-zinc-700 ml-24 font-extrabold text-4xl text mt-16">Please login to view the dashboard</h1>
    </main>
  );
}