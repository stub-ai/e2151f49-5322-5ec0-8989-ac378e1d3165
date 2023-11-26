import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Laradesk
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/tickets">
                <a className="text-indigo-600 hover:text-indigo-900">Tickets</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a className="text-indigo-600 hover:text-indigo-900">Login</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;