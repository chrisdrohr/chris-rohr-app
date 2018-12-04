import React, { Component } from 'react';
import Container from '../Custom/Container';
import Subtitle from '../Custom/Subtitle';
import { profile } from '../Constants';
import {
  Avatar,
  Chip,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  withStyles
} from '@material-ui/core';
import { Code } from '@material-ui/icons';

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
    overflow: 'visible',
    borderRadius: 0,
    margin: 'auto'
  },
  card: {
    width: '100%'
  },
  container: {},
  chip: {
    margin: spacing.unit,
    color: palette.common.white,
    boxShadow: shadows[2],
    willChange: ['transform', 'box-shadow'],
    transition: create(
      ['transform', 'box-shadow'],
      duration.short,
      easing.easeOut
    ),
    '&:hover': {
      boxShadow: shadows[8],
      transform: 'scale(1.2)'
    }
  },
  list: {
    [breakpoints.up('sm')]: {
      height: 500,
      overflowY: 'scroll'
    }
  },
  image: {
    objectFit: 'contain'
  },
  progress: {
    marginTop: 8,
    borderRadius: 16,
    height: 8,
    boxShadow: shadows[1]
  },
  title: {
    color: palette.secondary.main
  }
});
class Skills extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <Subtitle icon={<Code />}>Skills</Subtitle>
        <List className={props.classes.list}>
          {profile.skills.map((item, i) => (
            <React.Fragment key={i}>
              <ListItem>
                <ListItemText primary={item.name} />
              </ListItem>
              <List>
                {item.list.map(skill =>
                  typeof skill === 'string' ? (
                    <Chip
                      key={skill}
                      className={props.classes.chip}
                      color={'primary'}
                      label={skill}
                    />
                  ) : (
                    <ListItem key={skill.name}>
                      <ListItemAvatar>
                        <Avatar
                          className={props.classes.avatar}
                          classes={{ img: props.classes.image }}
                          src={skill.svg}
                          alt={'icon'}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography variant={'body2'}>
                            {skill.name}
                          </Typography>
                        }
                        secondary={
                          <LinearProgress
                            className={props.classes.progress}
                            color={skill.value > 75 ? 'secondary' : 'primary'}
                            variant={'determinate'}
                            value={skill.value}
                          />
                        }
                      />
                    </ListItem>
                  )
                )}
              </List>
            </React.Fragment>
          ))}
        </List>
      </div>
    );
  }
}
export default withStyles(styles)(Skills);
