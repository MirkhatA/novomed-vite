import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <div
      className="
        font-semibold
        flex
        justify-around
        py-5"
    >
      <Link to="/">
        <p>
          <span className="font-medium">NOVOMED</span>
          <span className="font-normal">KZ</span>
        </p>
      </Link>

      <ul className="flex text-sm">
        <NavbarLink link="/" value="О нас" />
        <NavbarLink link="/companies" value="Фирмы" />
        <NavbarLink link="/items" value="Продукция" />
        <NavbarLink link="/contacts" value="Контакты" />
      </ul>
    </div>
  );
};

export default Navbar;
