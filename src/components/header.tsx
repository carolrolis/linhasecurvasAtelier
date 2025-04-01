import { useState } from "react";
import bars from "../images/icons/bars.svg";
import cross from "../images/icons/cross.svg";
import Logo from "../images/logos/logo";

const NavItems = [
  {
    title: "Início",
    url: "#",
    className: "nav-link",
  },
  {
    title: "Catálogo",
    url: "#",
    className: "nav-link",
  },
  {
    title: "Sobre",
    url: "#",
    className: "nav-link",
  },
  {
    url: "#",
    className: "searchbar",
  },
];

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu((openMenu) => !openMenu);
  };

  return (
    <section
      id="header"
      className="w-screen max-h-fit bg-[rgba(255,255,255,60%)] hover:bg-white transform duration-300 z-2 fixed top-0 left-0"
    >
      <nav className="w-full flex items-center justify-between">
        <div className="max-w-2/11 min-w-55 cursor-pointer px-4 py-2">
          <Logo />
        </div>
        <div className="mobile-menu-icon md:hidden mr-5" onClick={handleClick}>
          <img
            src={openMenu ? cross : bars}
            alt="Menu"
            className="w-6 h-6"
          />
        </div>
        <ul
          className={`flex items-center text-xl px-10 gap-30 ${
            openMenu ? "MobileMenu active" : "MobileMenu"
          }
          `}
        >
          {NavItems.map((Item, index) => {
            console.log(Item);
            return (
              <li key={index} className={Item.className}>
                {Item.title}
                {Item.className.includes("searchbar") && (
                  <input
                    title="Pesquisar"
                    type="text"
                    placeholder="Pesquisar"
                    className="searchbar-input placeholder:text-darkPink focus:placeholder:text-lightPink"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Header;
