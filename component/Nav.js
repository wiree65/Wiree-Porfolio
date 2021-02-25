import { Fragment } from "react";
import Link from "next/link";

const Nav = ({ page }) => {
  const items = [
    { label: "Home", link: "/", page: "home" },
    { label: "About me", link: "/about", page: "about" },
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
              key={item.label} style={{marginLeft:'50px'}}
            >
              <Link href={item.link}>{item.label}</Link>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .container {

          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          margin-right:20px
        }
    
      `}</style>
      
    </Fragment>
  );
};

export default Nav;
