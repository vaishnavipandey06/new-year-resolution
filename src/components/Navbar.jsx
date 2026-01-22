import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      <nav className="mx-auto max-w-7xl px-10 py-4
        flex items-center justify-between
        bg-[#0a0a1a]/70 backdrop-blur-xl
        border-b border-white/10">

        {/* Logo */}
        <h1 className="text-lg font-semibold text-white tracking-wide">
          Vaishnavi<span className="text-cyan-400">Pandey</span>
        </h1>

        {/* Links */}
        <div className="flex gap-10 text-sm">
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-white/70 hover:text-cyan-400 transition
                 after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                 after:bg-cyan-400 after:transition-all
                 ${isActive ? "after:w-full text-cyan-400" : "after:w-0"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
