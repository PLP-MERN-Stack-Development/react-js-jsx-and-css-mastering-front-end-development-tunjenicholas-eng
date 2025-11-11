import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';


const Navbar = () => {
  const activeLinkClass = 'text-white bg-blue-700';
  const defaultLinkClass = 'text-gray-300 hover:bg-gray-700 hover:text-white';

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">My App</span>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? activeLinkClass : defaultLinkClass}`
                  }
                >
                  Task Manager
                </NavLink>
                <NavLink
                  to="/posts"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? activeLinkClass : defaultLinkClass}`
                  }
                >
                  API Data
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;