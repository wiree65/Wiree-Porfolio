import { Fragment, useState, useEffect } from "react";
import IndexMobile from "./renderPage/indexMobile";
import IndexWeb from "./renderPage/indexWeb";

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
      <div className="container">
        {isMobile ? <IndexMobile></IndexMobile> : <IndexWeb></IndexWeb>}
        <div>
        </div>
      </div>
      <style jsx>{`
        .container {
          height: 60vh;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </Fragment>
  );
};

export default General;
