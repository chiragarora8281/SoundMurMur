import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>
        <section id="navbar">
          <article className="container">
            <div className="logoBlock">LOGO</div>
            <div className="menuBlock">
              <ul>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <button
                    className={`${isOpen ? "is-active" : "is-not-active"}`}
                    onClick={handleHamburger} id={`${isOpen ? "block" : "hidden"}`}
                  >
                    {isOpen ? (
                      <>
                        <IoClose
                          className="hamburger"
                          onClick={handleHamburger}
                        />
                          <ul className="hamburger-item">
                            <li>
                              <a href="#">More sounds</a>
                            </li>
                            <li>
                              <a href="#">Settings</a>
                            </li>
                            <li>
                              <a href="#">Voice Adjust</a>
                            </li>
                          </ul>
                      </>
                    ) : (
                      <>
                        <GiHamburgerMenu
                          className="hamburger"
                        />
                      </>
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </nav>
    </div>
  );
};

export default Hamburger;
