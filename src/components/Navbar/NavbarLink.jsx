import { Link } from "react-router-dom";

const NavbarLink = (props) => {
  const { link, value } = props;

  return (
    <Link to={link} className="sm:mx-5">
      <p
        className={`
        relative
        inline-block
        before:duration-300
        before:h-0.5
        sm:before:bg-dark 
        before:bg-light
        before:absolute
        before:w-0
        before:top-6
        hover:w-full
        hover:before:w-full
        w-full
        sm:border-0
        border-b
        border-grey
        p-5 sm:p-0
      `}
      >
        {value}
      </p>
    </Link>
  );
};

export default NavbarLink;
