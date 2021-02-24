import { Fragment, useEffect, useState } from "react";
const Typing = ({ bio, speed }) => {
  let i = 0;
  const [text, setText] = useState("");
  const typeWriter = () => {
    if (i < bio.length) {
      setText(bio.slice(0, i + 1));
      i++;
      setTimeout(typeWriter, speed);
    }
  };
  const getCursorStyle = () => {
    if (text.length !== bio.length) {
      return {
        marginLeft: "-5px",
        width: "5px",
        height: "15px",
        backgroundColor: "grey",
      };
    } else {
      return {};
    }
  };

  useEffect(() => {
    typeWriter();
  }, []);
  return (
    <Fragment>
      <p style={{ padding: "5px", display: "flex" }}>{text}</p>
      <div style={getCursorStyle()}></div>
    </Fragment>
  );
};

export default Typing;
