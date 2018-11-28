import React from 'react';
import { ButtonBase, withStyles } from '@material-ui/core';
import classnames from 'classnames';
const styles = ({
  palette,
  shadows,
  transitions: { create, duration, easing }
}) => ({
  button: {
    transition: create(
      ['border', 'box-shadow'],
      duration.short,
      easing.easeInOut
    )
  },
  root: {
    height: 80,
    width: 80,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '50%',
    color: palette.common.white,
    margin: 8
  },
  selected: {
    boxShadow: shadows[8],
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: palette.common.white
  }
});
const LinkButton = props => (
  <ButtonBase
    className={classnames(props.classes.button, {
      [props.classes.selected]: props.selected
    })}
    style={{ backgroundColor: props.color }}
    classes={{ root: props.classes.root }}
    variant={'fab'}
    onClick={props.onClick}>
    {props.children}
  </ButtonBase>
);
export default withStyles(styles)(LinkButton);
