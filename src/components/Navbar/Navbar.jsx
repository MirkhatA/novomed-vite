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
            items-center
            sm:justify-around
            justify-between
            mx-5
            py-5"
      >
        <Link to="/">
          <p className="text-lg">
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

        <div className="p-3 sm:hidden rounded-full bg-lightBlue">
          {!isOpen && (
            <GrMenu className="text-xl" onClick={() => setIsOpen(true)} />
          )}
          {isOpen && (
            <GrClose className="text-xl" onClick={() => setIsOpen(false)} />
          )}
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="
                flex 
                justify-between
                w-full
                h-screen
                bg-light
                top-0
                z-10"
          >
            <ul
              className="
                list-item 
                w-full"
            >
              <NavbarLink link="/" value="О нас" />
              <NavbarLink link="/companies" value="Фирмы" />
              <NavbarLink link="/items" value="Продукция" />
              <NavbarLink link="/contacts" value="Контакты" />
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
