import React from 'react';
import { ButtonBase, Card, Typography, withStyles } from '@material-ui/core';

const styles = ({}) => ({
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
const OverlayCard = props => {
  return (
    <Card id={props.id} style={{position: 'relative'}}>
      <ButtonBase className={props.classes.overlay} onClick={props.onClick}>
        <Typography style={{ fontSize: '1rem' }}>{props.title}</Typography>
      </ButtonBase>
      {props.children}
    </Card>
  );
};
export default withStyles(styles)(OverlayCard);
