import { getServerSession } from "next-auth";
import Todo from "@/components/todo/Todo"
import AuthCheck from "@/components/AuthCheck";


export default async function Dashboard() {
  const session = await getServerSession();

  return (
    <AuthCheck>
      <main className="bg-zinc-700 flex  flex-col items-center p-5 h-screen">
        <div>
          <Todo session={session} />
        </div>
      </main>
    </AuthCheck>
  );
}