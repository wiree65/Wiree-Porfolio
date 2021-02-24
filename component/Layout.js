import { Fragment, useState, useEffect } from "react";
import Header from "./Header";
import Sidenav from "../component/Nav";
import Uppernav from "../component/uppernav";

const General = (props) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  const isMobile = windowSize.width < 768;
  return (
    <Fragment>
      <Header></Header>
      <div className="container">
        {isMobile ? <Uppernav></Uppernav> : <Sidenav></Sidenav>}
        <div>
          <main className="h-full">{props.children}</main>
        </div>
      </div>
      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
        }
      
      `}</style>
    </Fragment>
  );
};

export default General;
