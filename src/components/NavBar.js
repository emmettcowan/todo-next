
import React from 'react';
import Link from 'next/link';
import { SignInButton, SignOutButton } from './buttons';


export default function NavBar() {

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link className="text-white text-xl font-semibold" href="/">ToDo App</Link>
          <ul className="flex space-x-4">
            <li><SignInButton /></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}