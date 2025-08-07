import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ toggleTheme }) => {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar bg-base-200 shadow-sm pt-5 ">
      <div class="flex-1 text-4xl">Ryan Lov</div>
      {/*Desktop links navigation */}
      <div class="flex-none hidden md:flex">
        <ul class="menu menu-horizontal px-1">
          {links.map((link) => {
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-lg font-semibold text-base-content hover:text-primary transition-colors duration-500 ease-in-out cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <Link
              to="/blog"
              className="text-lg font-semibold text-base-content hover:text-primary transition-colors duration-500 ease-in-out"
            >
              Blog
            </Link>
          </li>
          <li>
            <a
              href="/Ryan_Lov_Resume_Web_Dev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-base-content hover:text-primary transition-colors duration-500 ease-in-out"
            >
              Resume
            </a>
          </li>
        </ul>
        <label class="swap swap-rotate">
          <input
            type="checkbox"
            class="theme-controller"
            value="synthwave"
            onClick={toggleTheme}
          />

          <svg
            class="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            class="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
      {/*Mobile links navigation */}
      <div class="flex-none md:hidden">
        <button
          class="btn btn-square"
          onClick={() => setMenuOpen(!menuOpen)}
          alt="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-base-100 flex flex-col items-start justify-center md:hidden">
          <button
            className="absolute top-4 right-4 btn btn-square z-51"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Close menu"
            alt="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="menu menu-vertical p-4 w-full ">
            {links.map((link) => (
              <li
                key={link.href}
                class="pb-5 text-2xl font-semibold "
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <a
                  href={link.href}
                  class="text-lg font-semibold text-base-content hover:text-primary transition-colors duration-500 ease-in-out"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pb-5 text-2xl font-semibold">
              <Link
                to="/blog"
                className="text-lg font-semibold text-base-content hover:text-primary transition-colors duration-500 ease-in-out"
              >
                Blog
              </Link>
            </li>
            <li className="pb-5 text-2xl font-semibold">
              <a
                href="/Ryan_Lov_Resume_Web_Dev.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pb-5 text-lg font-semibold text-base-content hover:text-primary transition-colors duration-500 ease-in-out"
              >
                Resume
              </a>
            </li>
            <label class="swap swap-rotate">
              <input
                type="checkbox"
                class="theme-controller"
                value="synthwave"
                onClick={toggleTheme}
              />

              <svg
                class="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                class="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
