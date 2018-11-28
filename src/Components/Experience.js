import React from 'react';
import Subtitle from '../Custom/Subtitle';
import CollapseListItem from '../Custom/CollapseListItem';
import { experience } from '../Constants';
import {
  List,
  ListItem,
  ListItemText,
  withStyles
} from '@material-ui/core';
import { Work } from '@material-ui/icons';

const styles = ({
  breakpoints,
  palette,
  shadows,
  shape,
  spacing,
  transitions: { create, easing, duration },
  zIndex
}) => ({
  primary: {
    color: palette.primary.main
  },
  secondary: {
    color: palette.secondary.main
  }
});

const Experience = props => {
  return (
    <div>
      <Subtitle icon={<Work/>}>Experience</Subtitle>
      <List>
        {experience.map((item, i) => (
          <CollapseListItem
            key={i}
            primary={item.name}
            secondary={item.position +' '+ item.duration}>
           
            {Boolean(item.description) &&
              item.description.map((value, i) => (
                <ListItem dense key={i}>
                  <ListItemText secondary={value} />
                </ListItem>
              ))}
          </CollapseListItem>
        ))}
      </List>
    </div>
  );
};
export default withStyles(styles)(Experience);
