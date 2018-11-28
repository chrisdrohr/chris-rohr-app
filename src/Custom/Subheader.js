import { Avatar, Typography, withStyles } from '@material-ui/core';
import { font } from '../Constants';
import React from 'react';

const styles = ({
  breakpoints,
  palette,
  shadows,
  shape,
  spacing,
  transitions: { create, easing, duration },
  zIndex
}) => ({
  avatar: {
    marginRight: 8,
    backgroundColor: palette.primary.main,
    color: 'white'
  },
  container: {
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  divider: {
    width: 150,
    backgroundColor: palette.secondary.main,
    height: 5,
    borderRadius: shape.borderRadius * 2,
    marginBottom: 8
  },
  title: {
    fontSize: '1.8rem',
    fontFamily: font,
    fontWeight: 800,
    [breakpoints.down('xs')]: {
      fontSize: '1.5rem'
    }
  }
});
const Subheader = props => (
  <div className={props.classes.container}>
    {Boolean(props.icon) && (
      <Avatar className={props.classes.avatar}>{props.icon}</Avatar>
    )}
    <Typography
      align={'left'}
      className={props.classes.title}
      paragraph
      variant={'h1'}>
      {props.children}
    </Typography>
  </div>
);
export default withStyles(styles)(Subheader);
