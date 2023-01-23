import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="nav-main p-5">
      <div className="container">
        <nav className="navbar flex items-center">
          <div className="navbar--logo w-50">
            <p>WORKOUT</p>
          </div>
          <div className="navbar--links w-50">
            <ul className="flex justify-center">
              <li className="nav-link">
                <Link href="/">EXERCISE</Link>
              </li>
              <li className="nav-link">
                <Link href="/about">TRAINERS</Link>
              </li>
              <li className="nav-link">
                <Link href="/blog/hello-world">PRICING</Link>
              </li>
              <li className="nav-link">
                <Link href="/blog/hello-world">LOGIN</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
