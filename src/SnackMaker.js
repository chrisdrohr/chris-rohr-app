import React, { Component } from "react";
import { IconButton, Snackbar, withStyles } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const styles = ({ palette }) => ({
  snackbar: {
    backgroundColor: palette.primary.main
  }
});
class SnackMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      open: false
    };
  }
  handleOpen = message => {
    this.setState({ open: true, message });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };
  render() {
    const props = this.props;
    const state = this.state;
    const functions = {
      handleOpen: this.handleOpen,
      handleClose: this.handleClose
    };
    return (
      <div>
        {props.children(functions)}
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id",
            classes: { root: props.classes.snackbar }
          }}
          message={state.message}
          action={
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <Close />
            </IconButton>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles)(SnackMaker);
