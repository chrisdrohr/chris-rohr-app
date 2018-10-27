import Subheader from '../Custom/Subheader';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  Fade,
  Grid,
  Hidden,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
  withStyles
} from '@material-ui/core';
import { profile, hobbiesInterests, personality } from '../Constants';
import { KeyboardArrowDown } from '@material-ui/icons';
import Snack from '../Custom/Snack';
import Links from './Links';
import Container from '../Custom/Container';
import React from 'react';
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
  avatar: {
    height: 200,
    width: 200,
    boxShadow: shadows[6],
    borderRadius: '4px 14px',
    margin: 'auto',
    filter: 'grayscale(100%)',
    transition: create('filter', duration.short, easing.easeOut),
    '&:hover': {
      filter: 'none'
    },
    [breakpoints.down('xs')]: {
      height: 120,
      width: 120
    }
  },
  aboutContainer: {
    minHeight: '50vh'
  },
  hobbieInterestAvatar: {
    backgroundColor: palette.primary.main,
    height: 100,
    width: 100,
    boxShadow: shadows[2],
    borderRadius: 4,
    margin: 'auto'
  },

  personalityIcon: {
    willChange: 'transform',
    transition: create('transform', duration.short, easing.sharp)
  },
  progress: {
    marginTop: 4,
    borderRadius: 8
  },
  title: {
    color: palette.secondary.main
  }
});
class About extends React.Component {
  state = {
    open: false,
    message: ''
  };
  handleOpen = message => {
    this.setState({ open: true, message });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };
  Personality = () => {
    const props = this.props;
    return (
      <Card>
        <CardHeader
          classes={{
            title: props.classes.title
          }}
          title={personality.title}
        />
        <Divider />
        <CardContent>
          <Typography variant={'caption'}>{personality.subtitle}</Typography>
        </CardContent>
        <List>
          {personality.results.map(result => (
            <CollapseState key={result.title}>
              {({ show, update }) => (
                <React.Fragment>
                  <ListItem
                    button
                    onClick={() => update(!show)}
                    key={result.title}>
                    <ListItemText
                      disableTypography
                      primary={result.title}
                      secondary={
                        <div>
                          <Typography variant={'body2'}>
                            {result.subtitle}
                          </Typography>
                          <LinearProgress
                            className={props.classes.progress}
                            color={result.score > 30 ? 'secondary' : 'primary'}
                            variant={'determinate'}
                            value={(result.score * 100) / 60}
                          />
                        </div>
                      }
                    />
                    <KeyboardArrowDown
                      className={props.classes.personalityIcon}
                      color={'action'}
                      style={{
                        transform: show ? 'rotate(0deg)' : 'rotate(180deg)'
                      }}
                    />
                  </ListItem>
                  <Collapse in={show}>
                    <CardContent>
                      {result.description.map((value, i) => (
                        <Typography
                          key={i}
                          paragraph={i === 0}
                          color={i === 0 ? undefined : 'primary'}
                          variant={i === 0 ? 'body2' : 'caption'}>
                          {value}
                        </Typography>
                      ))}
                    </CardContent>
                  </Collapse>
                </React.Fragment>
              )}
            </CollapseState>
          ))}
        </List>
      </Card>
    );
  };
  HobbiesInterests = () => {
    const props = this.props;
    return (
      <Card className={props.classes.card}>
        <CardHeader
          classes={{
            title: props.classes.title
          }}
          title={'Hobbies & Interests'}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={16} justify={'center'}>
            {hobbiesInterests.map(item => (
              <Grid key={item.name} item sm={4} xs={6}>
                <div>
                  <Avatar className={props.classes.hobbieInterestAvatar}>
                    {item.svg}
                  </Avatar>
                  <Typography
                    align={'center'}
                    style={{
                      margin: 'auto',
                      width: 100,
                      marginTop: 4
                    }}
                    variant={'subtitle2'}>
                    {item.name}
                  </Typography>
                  {Boolean(item.subtitle) && (
                    <Typography
                      style={{
                        margin: 'auto',
                        width: 100
                      }}
                      align={'center'}
                      variant={'caption'}>
                      {item.subtitle}
                    </Typography>
                  )}
                </div>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    );
  };
  render() {
    const props = this.props;
    const state = this.state;
    const isMobile = props.width === 'xs';
    return (
      <Container id={'about'} className={props.classes.aboutContainer}>
        <Subheader visible={props.visible}>About</Subheader>
        <Snack
          onClose={this.handleClose}
          open={state.open}
          message={state.message}
        />
        <Fade in={props.visible}>
          <div>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <Hidden smUp>
                  <Avatar
                    className={props.classes.avatar}
                    src={profile.photoURL}
                  />
                </Hidden>
                <CardHeader
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                  avatar={
                    isMobile ? (
                      undefined
                    ) : (
                      <Avatar
                        className={props.classes.avatar}
                        src={profile.photoURL}
                      />
                    )
                  }
                  disableTypography
                  title={
                    <Typography
                      align={'left'}
                      paragraph={!isMobile}
                      variant={'h6'}>
                      {profile.summary[0]}
                    </Typography>
                  }
                  subheader={
                    <React.Fragment>
                      <Hidden xsDown>
                        <Typography
                          align={'left'}
                          paragraph={isMobile}
                          variant={'subtitle1'}>
                          {profile.summary[1]}
                        </Typography>
                      </Hidden>
                      <Hidden xsDown>
                        <Links handleOpen={this.handleOpen} />
                      </Hidden>
                    </React.Fragment>
                  }
                />

                <Hidden smUp>
                  <Typography align={'left'} paragraph variant={'subtitle1'}>
                    {profile.summary[1]}
                  </Typography>
                  <Links handleOpen={this.handleOpen} />
                </Hidden>
              </Grid>
              <Grid item sm={6} xs={12}>
                <this.Personality />
              </Grid>
              <Grid item sm={6} xs={12}>
                <this.HobbiesInterests />
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Container>
    );
  }
}
export default withStyles(styles)(About);
