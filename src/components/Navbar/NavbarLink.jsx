import { Link } from "react-router-dom";

const NavbarLink = (props) => {
  const { link, value } = props;

  return (
    <Link to={link} className="mx-5">
      <p
        className={`
        relative
        inline-block
        before:duration-300
        before:h-0.5
        before:bg-dark 
        before:absolute
        before:w-0
        before:top-6
        hover:w-full
        hover:before:w-full
      `}
      >
        {value}
      </p>
    </Link>
  );
};

export default NavbarLink;
