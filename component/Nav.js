import { Fragment } from "react";
import Link from "next/link";

const Nav = ({ page }) => {
  const items = [
    { label: "Home", link: "/", page: "home" },
    { label: "About", link: "/about", page: "about" },
    { label: "Experiences", link: "/experiences", page: "experiences" },
    { label: "Activities", link: "/activities", page: "activities" },
    { label: "Contact", link: "/contact", page: "contact" },
  ];
  return (
    <Fragment>
      <div className="container">
        {items.map((item) => {
          return (
            <div
              className={`item ${item.page === page ? "active" : ""}`}
              key={item.label}
              style={{ marginLeft: "30px", marginTop: "10px" }}
              id="fontNav"
            >
              <Link href={item.link}>{item.label}</Link>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .active {
          font-weight: 600;
          transition: 1s;
          color: #d18585;
          border-bottom: 2px solid #d18585;
        }

        #fontNav {
          font-size: 100%;
        }
        .container {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          margin-right: 20px;
        }
        @media only screen and (max-width: 768px) {
          .container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          #fontNav {
            font-size: 70%;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Nav;
