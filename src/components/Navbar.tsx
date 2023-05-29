import { NavLink } from 'react-router-dom';

type LinkType = {
  name: string;
  url: string;
};

const navLinks: LinkType[] = [
  {
    name: 'First Question',
    url: '/',
  },
  {
    name: 'Second Question',
    url: '/second-question',
  },
  {
    name: 'Third Question',
    url: '/third-question',
  },
];

const Navbar = () => {
  return (
    <section className="bg-gray-300 mb-10">
      <nav className="py-6 px-6 md:px-0 container mx-auto flex justify-between items-center ">
        <div className="">
          <h3 className="font-bold text-2xl">Test DoCheck</h3>
        </div>
        <div className="w-[50%] md:w-[30%] flex md:flex-row flex-col justify-between items-center">
          {navLinks.map((link, index) => (
            <NavLink
              key={`navlink-${index}`}
              to={link.url}
              className={({ isActive }) =>
                isActive
                  ? `font-medium text-gray-900 transition-all duration-300`
                  : `text-gray-500 font-medium hover:text-gray-900 transition-all duration-300`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
