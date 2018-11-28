import React, { PureComponent } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grow,
  IconButton,
  withWidth,
  withStyles
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import classnames from 'classnames';

function Transition(props) {
  const { x, y } = props.dimensions;
  return (
    <Grow
      style={{
        opacity: 1,
        transformOrigin: x + 'px ' + y + 'px',
      }}
      {...props}
    />
  );
}

const styles = ({
  breakpoints,
  palette,
  shadows,
  transitions: { create, duration, easing },
  zIndex
}) => ({
  closeButton: {
    zIndex: zIndex.appBar,
    position: 'absolute',
    right: 0
  },

  dialog: {
    minWidth: '40%',
    maxWidth: 800,
    maxHeight: '90%',
    [breakpoints.down('sm')]: {
      minWidth: '70%',
      maxHeight: '100%'
    },
    [breakpoints.down('xs')]: {
      minWidth: '90%',
      maxHeight: '100%'
    }
  }
});

class GrowDialog extends PureComponent {
  render() {
    const props = this.props;
    return (
      <Dialog
        classes={{
          paper: classnames({
            [props.classes.dialog]: !Boolean(props.className),
            [props.className]: Boolean(props.className)
          })
        }}
        onClose={props.onClose}
        onEntered={props.onEntered}
        onExit={props.onExit}
        onExited={props.onExited}
        open={props.open}
        scroll={props.scroll}
        TransitionComponent={Transition}
        TransitionProps={{
          dimensions: props.dimensions
        }}>
        <IconButton
          className={classnames({
            [props.classes.closeButton]: true,
            [props.classes.white]: true
          })}
          onClick={props.onClose}>
          <Close />
        </IconButton>
        {Boolean(props.title) && <DialogTitle>{props.title}</DialogTitle>}
        <DialogContent>{props.children}</DialogContent>
        {Boolean(props.actions) && (
          <DialogActions>{props.actions}</DialogActions>
        )}
      </Dialog>
    );
  }
}

export default withWidth()(withStyles(styles, { withTheme: true })(GrowDialog));
