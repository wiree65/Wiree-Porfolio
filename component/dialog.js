import { Fragment, useState } from "react";

import Link from "next/link";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
const Nav = ({ handleClickOpen, open }) => {
  function Example(props) {
    var items = [
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

    return (
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    );
  }

  function Item(props) {
    return (
      <Paper>
        <img src={`${props.item.image}`}style={{width:'100%'}}>{}</img>
      </Paper>
    );
  }
  return (
    <Fragment>
      <div>
        <Dialog
          open={open}
          onClose={handleClickOpen}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {/* <Button onClick={handleClickOpen} color="primary">
              Disagree
            </Button> */}

          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            {Example()}

            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </div>
      <style jsx>{``}</style>
    </Fragment>
  );
};

export default Nav;
