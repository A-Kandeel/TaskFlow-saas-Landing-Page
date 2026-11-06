import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./button";
import Logo from "./logo";

const links = [
  { label: "Features", href: "#Features" },
  { label: "Pricing", href: "#Pricing" },
  { label: "FAQ", href: "#FAQ" },
  { label: "Contact", href: "#Contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav-wrap">
      <nav className={"navbar container"} aria-label="Main">
        <Logo />
        <ul className={`${open ? "show" : "close"}`}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={close}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="btn-box">
          <a className="login" href="#Contact">Log In</a>
          <Button onClick={() => window.location.href ="#Demo"}>Get Started</Button>
        </div>
        <button
          className="toggle-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  );
}

export default NavBar;