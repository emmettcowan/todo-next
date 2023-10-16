import { getServerSession } from "next-auth";
import Todo from "@/components/todo/Todo"


export default async function Dashboard() {
  const session = await getServerSession();

  if (session) return (
    <main className="flex  flex-col items-center p-5 h-screen">
      <div>
        <h1 className="text-zinc-700 ml-24 font-extrabold text-4xl">Hello, {session.user.name}</h1>
        <Todo session={session} />
      </div>
    </main>
  );
  if (!session) return (
    <main className="flex  flex-col items-center p-5 h-screen">
      <h1 className="text-zinc-700 ml-24 font-extrabold text-4xl text mt-16">Please login to view the dashboard</h1>
    </main>
  );
}