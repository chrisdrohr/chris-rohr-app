import React from 'react';
import { Avatar, Typography, withStyles } from '@material-ui/core';
const styles = ({
  breakpoints,
  palette,
  shadows,
  shape,
  spacing,
  transitions: { create, easing, duration },
  zIndex
}) => ({
  icon: {
    marginRight: 8,
    color: 'white',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    height: 48,
  },
 
  title: {
    // fontSize: '1.8rem',
    // fontFamily: font,
    // fontWeight: 800,
    [breakpoints.down('xs')]: {
      // fontSize: '1.5rem'
    }
  }
});
const Subtitle = props => {
  return (
    <div className={props.classes.container}>
      {Boolean(props.icon) && (
        <div className={props.classes.icon}>{props.icon}</div>
      )}
      <Typography
        align={'left'}
        className={props.classes.title}
        variant={'subtitle1'}>
        {props.children}
      </Typography>
    </div>
  );
};
export default withStyles(styles)(Subtitle);
