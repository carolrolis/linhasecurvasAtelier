import { useState, useRef, useEffect } from "react";
import bars from "../assets/images/icons/bars.svg";
import cross from "../assets//images/icons/cross.svg";
import logo from "../assets/images/logos/logo.svg";

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
  const menuRef = useRef<HTMLUListElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpenMenu((openMenu) => !openMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <header className="w-screen max-h-fit bg-[rgba(255,255,255,60%)] hover:bg-white active:bg-white focus:bg-white transform duration-300 z-2 fixed top-0 left-0">
      <nav className="w-full flex items-center justify-between">
        <div className="max-w-2/11 min-w-50 cursor-pointer px-4 py-2">
          <img alt="Linhas & Curvas" src={logo} />
        </div>
        <div
          ref={menuButtonRef}
          className="mobile-menu-icon hidden mr-5"
          onClick={handleClick}
        >
          <img src={openMenu ? cross : bars} alt="Menu" className="w-6 h-6" />
        </div>
        <ul
          ref={menuRef}
          className={`flex items-center text-xl px-10 gap-30 ${
            openMenu ? "MobileMenu active" : "MobileMenu"
          }
          `}
        >
          {NavItems.map((Item, index) => {
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
    </header>
  );
};

export default Header;
