import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow">
      <nav className="w-full">
        {/* Full width background + centered content */}
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="h-10"
              alt="Logo"
            />
          </Link>

          {/* Navigation links */}
          <ul className="hidden lg:flex items-center space-x-8 font-medium">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "text-orange-700"
                      : "text-gray-700"
                  }
                   hover:text-orange-700`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                end
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "text-orange-700"
                      : "text-gray-700"
                  }
                   hover:text-orange-700`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                end
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "text-orange-700"
                      : "text-gray-700"
                  }
                   hover:text-orange-700`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/github"
                end
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "text-orange-700"
                      : "text-gray-700"
                  }
                   hover:text-orange-700`
                }
              >
                Github
              </NavLink>
            </li>

          </ul>

          {/* Auth buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="#"
              className="text-blue-600 font-medium hover:underline"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Get started
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;
