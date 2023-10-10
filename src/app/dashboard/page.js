import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <main className="bg-zinc-700 flex  flex-col items-center p-24 h-screen">
      <div>
        <h1>Dashboard</h1>
      </div>
    </main>
  );
}