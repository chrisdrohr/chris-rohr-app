import React from 'react';
import Container from '../Custom/Container';
import Subtitle from '../Custom/Subtitle';
import CollapseListItem from '../Custom/CollapseListItem';
import { profile } from '../Constants';
import {
  List,
  ListItem,
  ListItemText,
  withStyles
} from '@material-ui/core';

import { School } from '@material-ui/icons';

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
const Education = props => {
  return (
    <div>
      <Subtitle icon={<School />}>Education</Subtitle>
      <List>
        {profile.education.map((item, i) => (
          <CollapseListItem
            key={i}
            primary={item.name}
            secondary={item.field + ' ' + item.duration}>
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
export default withStyles(styles)(Education);
