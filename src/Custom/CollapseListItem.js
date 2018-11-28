import React from 'react';
import { KeyboardArrowDown, RadioButtonUnchecked } from '@material-ui/icons';
import {
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from '@material-ui/core';
import { toRenderProps, withState } from 'recompose';
const CollapseState = toRenderProps(withState('show', 'update', false));

const styles = ({
  breakpoints,
  palette,
  shadows,
  shape,
  spacing,
  transitions: { create, easing, duration },
  zIndex
}) => ({
  more: {
    position: 'absolute',
    top: 16,
    right: 16
  },
  icon: {
    willChange: 'transform',
    transition: create('transform', duration.short, easing.sharp)
  }
});
const CollapseListItem = props => {
  return (
    <CollapseState>
      {({ show, update }) => (
        <React.Fragment>
          <ListItem button onClick={() => update(!show)}>
            <ListItemIcon>
              <RadioButtonUnchecked color={'secondary'} />
            </ListItemIcon>
            <ListItemText primary={props.primary} secondary={props.secondary} />

            {Boolean(props.children) && (
              <KeyboardArrowDown
                className={props.classes.icon}
                color={'action'}
                style={{
                  transform: show ? 'rotate(0deg)' : 'rotate(180deg)'
                }}
              />
            )}
          </ListItem>
          {Boolean(props.children) && (
            <Collapse in={show}>{props.children}</Collapse>
          )}
        </React.Fragment>
      )}
    </CollapseState>
  );
};
export default withStyles(styles)(CollapseListItem);
