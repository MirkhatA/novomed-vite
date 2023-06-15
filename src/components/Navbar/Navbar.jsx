import { GrMenu, GrClose } from "react-icons/gr";

import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="
            font-semibold
            flex
            sm:justify-around
            justify-between
            mx-5
            py-5"
      >
        <Link to="/">
          <p>
            <span className="font-medium">NOVOMED</span>
            <span className="font-normal">KZ</span>
          </p>
        </Link>

        <ul
          className="
            hidden
            text-sm
            sm:flex"
        >
          <NavbarLink link="/" value="О нас" />
          <NavbarLink link="/companies" value="Фирмы" />
          <NavbarLink link="/items" value="Продукция" />
          <NavbarLink link="/contacts" value="Контакты" />
        </ul>

        <GrMenu className="sm:hidden" onClick={() => setIsOpen(true)} />
      </div>

      {isOpen && (
        <>
          <div
            className="
                bg-opacity-25
                bg-dark
                top-0
                h-screen
                absolute
                w-full
                z-0"
            onClick={() => setIsOpen(false)}
          ></div>
          <div
            className="
                flex 
                justify-between
                w-4/5
                h-screen
                bg-light
                top-0
                p-5
                absolute
                z-10"
          >
            <ul className="list-item">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <p className="mt-4">О нас</p>
              </Link>{" "}
              <br />
              <Link to="/companies" onClick={() => setIsOpen(false)}>
                <p>Фирмы</p>
              </Link>{" "}
              <br />
              <Link to="/items" onClick={() => setIsOpen(false)}>
                <p>Продукция</p>
              </Link>{" "}
              <br />
              <Link to="/contacts" onClick={() => setIsOpen(false)}>
                <p>Контакты</p>
              </Link>
            </ul>
            <GrClose onClick={() => setIsOpen(false)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
