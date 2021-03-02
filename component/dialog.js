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
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
      },
      {
        name: "Random Name #2",
        description: "Hello World!",
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
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>

        <Button className="CheckButton">Check it out!</Button>
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
