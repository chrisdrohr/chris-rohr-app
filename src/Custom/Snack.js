import React, { Component } from "react";
import { IconButton, Snackbar, withStyles, withWidth } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const styles = ({ palette }) => ({
  snackbar: {
    backgroundColor: palette.primary.main
  }
});
class Snack extends Component {
 
  render() {
    const props = this.props;
    const isSmall = props.width === 'sm' || props.width === 'xs';

    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: !isSmall ? "top" : "bottom",
            horizontal: !isSmall ? "right" : "left"
          }}
          open={props.open}
          autoHideDuration={4000}
          onClose={props.onClose}
          ContentProps={{
            "aria-describedby": "message-id",
            classes: { root: props.classes.snackbar }
          }}
          message={props.message}
          action={
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={props.onClose}
            >
              <Close />
            </IconButton>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles)(withWidth()(Snack));
