import { useMediaQuery } from "react-responsive";
import  Link  from "next/link";

const links = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: 'tours',
    name: 'Events',
  },
  {
    path: 'albums',
    name: 'Albums',
  },
  {
    path: "heroImages",
    name: "All Images",
  },
  {
    path: "news",
    name: "News",
  },
];

const Nav = ({ containerStyles, linkStyles }) => {
    const isDesctop = useMediaQuery({
        query: '(min-width: 1310px)',
    });
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
            key={index}
            smooth={!isDesctop ? false : true}
            spy
            offset={-50}
            activeClass='active'
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
