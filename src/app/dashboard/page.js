import { getServerSession } from "next-auth";
import Todo from "@/components/todo/Todo"
import AuthCheck from "@/components/AuthCheck";


export default async function Dashboard() {
  const session = await getServerSession();

  return (
    <AuthCheck>
      <main className="flex  flex-col items-center p-5 h-screen">
        <div>
          <h1 className="text-zinc-700 ml-24 font-extrabold text-4xl">Hello, {session.user.name}</h1>
          <Todo session={session} />
        </div>
      </main>
    </AuthCheck>
  );
}