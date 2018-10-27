import React, { Component } from 'react';
import Container from '../Custom/Container';
import Subheader from '../Custom/Subheader';
import { profile } from '../Constants';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Fade,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

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
  image: {
    objectFit: 'contain'
  },
  title: {
    color: palette.secondary.main
  }
});
class Skills extends Component {
  render() {
    const props = this.props;
    return (
      <Container>
      <div id={'skills'}/>
        <Subheader visible={props.visible}>Skills</Subheader>
        <Fade in={props.visible}>
          <Grid container spacing={16} justify={'center'}>
            {profile.skills.map(item => (
              <Grid key={item.name} item sm={6} xs={12}>
                <Card className={props.classes.card}>
                  <CardHeader
                    classes={{
                      title: props.classes.title
                    }}
                    title={item.name}
                  />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={16} justify={'center'}>
                      {item.list.map(
                        skill =>
                          typeof skill === 'string' ? (
                            <Chip
                              key={skill}
                              className={props.classes.chip}
                              color={'primary'}
                              label={skill}
                            />
                          ) : (
                            <Grid key={skill.name} item sm={4} xs={6}>
                              <div>
                                <Avatar
                                  className={props.classes.avatar}
                                  classes={{ img: props.classes.image }}
                                  src={skill.svg}
                                />
                                <Typography
                                align={'center'}
                                  style={{
                                    margin: 'auto',
                                    width: 'fit-content',
                                    marginTop: 4
                                  }}
                                  variant={'subtitle2'}>
                                  {skill.name}
                                </Typography>
                              </div>
                            </Grid>
                          )
                      )}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Fade>
      </Container>
    );
  }
}
export default withStyles(styles)(Skills);
