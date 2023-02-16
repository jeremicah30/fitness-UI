import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="nav-main tablet:p-10 mobile:p-5">
      <div className="container">
        <nav className="navbar flex items-center">
          <div className="navbar--logo w-50">
            <p>WORKOUT</p>
          </div>
          <div className="navbar--links w-50 ">
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

          <div className="navbar--links-mobile hidden">
            <input type="checkbox" id="burger-toggle" />
            <label htmlFor="burger-toggle" class="burger-menu">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </label>
            <div class="menu">
              <div class="menu-inner">
                <ul class="menu-nav ">
                  <li class="menu-nav-item">
                    <Link className="menu-nav-link" href="/">
                      EXERCISE
                    </Link>
                  </li>
                  <li class="menu-nav-item">
                    <Link className="menu-nav-link" href="/">
                      TRAINERS
                    </Link>
                  </li>
                  <li class="menu-nav-item">
                    <Link className="menu-nav-link" href="/">
                      PRICING
                    </Link>
                  </li>
                  <li class="menu-nav-item">
                    <Link className="menu-nav-link" href="/">
                      LOGIN
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
