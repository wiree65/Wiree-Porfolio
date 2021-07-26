import { Fragment, useState, useEffect } from "react";
import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

const Web = (props) => {
  const [popup, setPopup] = React.useState(0);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const setRenderPopup = (number) => {
    setPopup(number);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {}, []);
  function Example(props) {
    var item;
    if (popup == 0) {
      item = [
        {
          image: "./images/project/eduroom/imageE/1.png",
        },
        {
          image: "./images/project/eduroom/imageE/2.png",
        },
        {
          image: "./images/project/eduroom/imageE/3.png",
        },
        {
          image: "./images/project/eduroom/imageE/4.png",
        },
        {
          image: "./images/project/eduroom/imageE/5.png",
        },
        {
          image: "./images/project/eduroom/imageE/6.png",
        },
        {
          image: "./images/project/eduroom/imageE/7.png",
        },
      ];
    } else {
      item = [
        {
          image: "./images/project/eduroom/projectCSB/1.png",
        },
        {
          image: "./images/project/eduroom/projectCSB/2.png",
        },
        {
          image: "./images/project/eduroom/projectCSB/3.png",
        },
        {
          image: "./images/project/eduroom/projectCSB/4.png",
        },
        {
          image: "./images/project/eduroom/projectCSB/5.png",
        },
        {
          image: "./images/project/eduroom/projectCSB/6.png",
        },
        {
          image: "./images/project/eduroom/projectCSB/7.png",
        },

        {
          image: "./images/project/eduroom/projectCSB/8.png",
        },
        {
          image: "./images/project/eduroom/projectCSB/9.png",
        },
        {
          image: "./images/project/eduroom/projectCSB/10.png",
        },
        {
          image: "./images/project/eduroom/projectCSB/11.png",
        },
      ];
    }

    return (
      <Carousel>
        {item.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    );
  }

  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    console.log("Loaded");
    setLoaded(true);
  };
  function Item(props) {
    return (
      <Paper>
        {loaded ? (
                  <div>{}</div>
                ) : (
                  <p>
                    test
                  </p>
                )}
        
        <img src={`${props.item.image}`} onLoad={handleLoad} style={{ width: "100%" }}></img>
      </Paper>
    );
  }
  const skills = [
    {
      icons: [
          {
          intro: "DekCare Project",
          content:
            " An online application taht provide community, consultation doctors and analysis poop health​ ",
          title: "DekCare",
          year: "2021",
          img: "./images/project/mobileDev/dekcare.png",
          front: "Flutter",
          width: "235px",
          back: "Express",
          socket: "",
          db: "MySql",
          link: "",
          css: "",
          site: "",
        },
        {
          intro: "Memby Management System",
          content:
            " An online membership system application for SMEs and online shop owner​ ",
          title: "Memby",
          year: "2021",
          img: "./images/project/mobileDev/memby.png",
          front: "Flutter",
          width: "300px",
          back: "Firebase",
          socket: "",
          db: "Firestore",
          link: "",
          css: "",
          site: "",
        },
        {
          intro: "Eduroom is a project in Integrated Project",
          content:
            " It is an online learning platform that consists of many different systems such as Course, Forum, Learning Path, Message, etc ",
          title: "EDUROOM",
          year: "2020",
            width: "100%",
          img: "./images/project/eduroom/1.png",
          front: "NextJS",
          back: "NodeJS",
          socket: "SocketIO",
          db: "PostgreSQL",
          link: "github.com/cs20-sit/eduroom",
          css: " MaterialUI",
          site: "https://eduroom.cscms.me",
        },
        {
          title: "CSB (Computer Science Bank)",
          year: "2019",
          content:
            "CS Bank is a term project in the course CSC105 Web Application Development where my group is responsible for the staff system",
          img: "./images/project/eduroom/2.png",
          front: "VueJS",
          back: "Java Servlet",
            width: "100%",

          socket: "",
          db: `Microsoft SQL`,
          link: "github.com/wiree65/staff",
          css: "Vuetify",
          site: "",
        },
        
      ],
    },
  ];
  return (
    <Fragment>
      <div className="container1">
        <div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <h3> {skills[0].icons[popup].title}</h3>
            </DialogTitle>
            <DialogContent>
              {Example()}

              <br />
              <DialogContentText id="alert-dialog-description">
                {skills[0].icons[popup].content == "" ? (
                  <div>{}</div>
                ) : (
                  <p>
                    <storng style={{ fontSize: "20px" }}>Detail: </storng>
                    {skills[0].icons[popup].content}
                  </p>
                )}
                {skills[0].icons[popup].front == "" ? (
                  <div>{}</div>
                ) : (
                  <p>
                    <storng style={{ fontSize: "20px" }}>
                      Front End Framework:{" "}
                    </storng>
                    {skills[0].icons[popup].front}
                  </p>
                )}
                {skills[0].icons[popup].db == "" ? (
                  <div>{}</div>
                ) : (
                  <p>
                    <storng style={{ fontSize: "20px" }}>
                      Back End Framework:{" "}
                    </storng>
                    {skills[0].icons[popup].db}
                  </p>
                )}
                {skills[0].icons[popup].css == "" ? (
                  <div>{}</div>
                ) : (
                  <p>
                    <storng style={{ fontSize: "20px" }}>CSS: </storng>
                    {skills[0].icons[popup].css}
                  </p>
                )}
                {skills[0].icons[popup].socket == "" ? (
                  <div>{}</div>
                ) : (
                  <p>
                    <storng style={{ fontSize: "20px" }}>Real-time </storng>
                    {skills[0].icons[popup].socket}
                  </p>
                )}

                {skills[0].icons[popup].link == "" ? (
                  <div>{}</div>
                ) : (
                  <p>
                    <storng style={{ fontSize: "20px" }}>Link: </storng>
                    {skills[0].icons[popup].link}
                  </p>
                )}
                {skills[0].icons[popup].site == "" ? (
                  <div>{}</div>
                ) : (
                  <p>
                    <storng style={{ fontSize: "20px" }}>Site: </storng>
                    {skills[0].icons[popup].site}
                  </p>
                )}
              </DialogContentText>
            </DialogContent>
            <DialogActions></DialogActions>
          </Dialog>
        </div>
        <div>
          {skills.map((i, index) => (
            <div key={index}>
              <div className="row">
                {i.icons.map((s, i) => (
                  <div key={i}>
                    <div className="row">
                      <div className="container">
                        <img
                          src={`${s.img}`}
                           style={{ width: `${s.width}`, borderRadius: "32px" }}
                        ></img>

                        <h3 className="font">{s.title}</h3>
                        <p>{s.year}</p>

                        <br />
                        <div className="hoverdiv">
                          <div className="content">
                            <h1>{s.title}</h1>

                            <h5> {s.intro}</h5>
                            <p>{s.content}</p>
                          </div>

                          <button
                            className="button"
                            onClick={() => {
                              handleClickOpen();
                              setRenderPopup(i);
                            }}
                          >
                            <span
                              style={{
                                fontSize: "14px",
                                backgroundColor: "transparent",
                              }}
                            >
                              see more information
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        h1 {
          color: #333333;
        }
        h5 {
          color: #6d6d6d;
        }
        .p {
        }
        .button {
          postion: absolute;
          background-color: #d18585;
          width: 200px;
          height: 40px;
          border-radius: 30px;
          color: white;
          // margin: 10px;
          border: none;
          outline: none;
        }
        .button:hover {
          transition: 0.5s;
          color: #d18585;
          border: solid;
          background-color: white;
          opacity: 1;
          right: 1;
        }
        p {
          color: #6d6d6d;

          padding: 0;
          margin: 10px;
        }
        .content {
          margin: 0;
          padding: 5px;
        }
        .link {
          color: #d18585;
        }
        .container {
          width: 320px;
          box-shadow: 3px 3px 5px 3px #ccc;
          margin: 20px;
          border-radius: 32px;
          transform: scale(1);
          transition: all 0.3s ease-in-out;
        }

        .hoverdiv {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          color: black;
          opacity: 0;
          border-radius: 32px;
          transition: all 0.15s ease-in-out;
          transition-delay: 0.15s;
          box-sizing: border-box;
        }
        .container:hover .hoverdiv,
        .container:active .hoverdiv {
          opacity: 1;
        }

        .container:hover {
          transform: scale(1.03);
        }

        .row {
          flex-wrap: wrap;
          display: flex;
          justify-content: center;
          flex-direction: row;
        }

        .container1 {
          // width: 100vw;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </Fragment>
  );
};

export default Web;
