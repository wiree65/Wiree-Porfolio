import { Fragment, useState } from "react";

import Link from "next/link";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Nav = ({ handleClickOpen, open }) => {
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
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
           
        
          </DialogActions>
        </Dialog>
      </div>
      <style jsx>{``}</style>
    </Fragment>
  );
};

export default Nav;
