
import React from 'react';
import Link
  from 'next/link';
export default function NavBar() {

  return (
    <nav className="bg-zinc-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-semibold">ToDo App</div>
          <ul className="flex space-x-4">
            <li><Link href="/login"> login</Link></li>
            <li><Link href="/register"> Register</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}