// import Header from "./components/Header/Header";
import "./Header.scss";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);

  const navItems = [
    { id: uuidv4(), label: "About Us", url: "/about" },
    { id: uuidv4(), label: "Services", url: "/services" },
    { id: uuidv4(), label: "Use Cases", url: "/use-cases" },
    { id: uuidv4(), label: "Pricing", url: "/pricing" },
    { id: uuidv4(), label: "Blog", url: "/blog" },
  ];

  return (
    <>
      <div className="header">
        <div className="header__inner container">
          <a href="/" className="header__logo logo">
            <img
              src="/images/Logo.svg"
              alt="Pozitivius"
              width={220}
              height={36}
              loading="eager"
              className="logo__image"
            />
            <span className="logo__text"></span>
          </a>
          <nav className="header__menu hidden-mobile">
            <ul className="header__menu-list">
              {navItems.map(({ id, label, url }) => (
                <li className="header__menu-item" key={id}>
                  <a className="header__menu-link" href={url}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="header__button button button-transparent hidden-mobile"
          >
            Request a quote
          </button>
          <button
            onClick={() => setIsActiveModal(!isActiveModal)}
            className="button__burger-menu burger-button visible-mobile"
          >
            <Menu />
            <span className="visually-hidden">Open navigation menu</span>
          </button>
        </div>
      </div>
      {isActiveModal && (
        <div className="mobile-overlay visible-mobile">
          <div className="mobile-overlay__close-button-wrapper">
            <button
              type="button"
              onClick={() => setIsActiveModal(!isActiveModal)}
              className="mobile-overlay__close-button cross-button"
            >
              <span className="visually-hidden">Close navigation menu</span>x
            </button>
          </div>
          <div className="mobile-overlay__body">
            <ul className="mobile-overlay__list">
              {navItems.map(({ id, label, url }) => (
                <li className="mobile-overlay__item" key={id}>
                  <a className="mobile-overlay__link" href={url}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
