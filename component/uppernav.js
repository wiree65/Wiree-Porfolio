import { Fragment, useState } from "react";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CSSTransition from "react-transition-group/CSSTransition";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const Uppernav = ({ page }) => {
  const items = [
    { label: "Home", link: "/", page: "home" },
    { label: "About me", link: "/about", page: "about" },
    { label: "Experiences", link: "/experiences", page: "experiences" },
    { label: "Activities", link: "/activities", page: "activities" },
    { label: "Contact", link: "/contact", page: "contact" },
  ];
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <CSSTransition
          mountOnEnter
          unmountOnExit
          timeout={500} classNames="my-node"
          in={toggleMenu}
          style={{transition:' 1s'}}
        >
          <div  className="container" >
            {items.map((item) => {
              return (
                <div >
                  <div
                    className={`item ${item.page === page ? "active" : ""}`}
                    key={item.label}
                    style={{ marginLeft: "32px",fontSize:'13px' }}
                  >
                    <Link href={item.link}>{item.label}</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </CSSTransition>
        <div>
          <div
            className="menu-size pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <FontAwesomeIcon
              style={{ height: "20px",width:'20px' }}
              icon={toggleMenu ? faTimes : faBars}
              color={'#303030'}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
      .my-node-enter {
        opacity: 0;
      }
      .my-node-enter-active {
        opacity: 1;
        transition: opacity 200ms;
      }
      .my-node-exit {
        opacity: 1;
        transition: opacity 1s;
      }
      .my-node-exit-active {
        opacity: 0;
        transition: opacity 200ms;
      }
        .container {
          height: 10vh;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          margin-right: 20px;
        }
        .font {
        }

        @media only screen and (max-width: 320px) {
        }
      `}</style>
    </Fragment>
  );
};

export default Uppernav;
