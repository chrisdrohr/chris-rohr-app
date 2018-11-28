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
  CircularProgress,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
  withStyles
} from '@material-ui/core';
import { profile, hobbiesInterests, personality } from '../Constants';
import { KeyboardArrowDown, Info } from '@material-ui/icons';
import Snack from '../Custom/Snack';
import Links from './Links';
import Subtitle from '../Custom/Subtitle';
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
  card: {
    backgroundColor: palette.primary.main,
    height: 100,
    width: 100,
    // boxShadow: shadows[2],
    // borderRadius: 4,
    margin: 'auto'
  },
  cardAvatar: {
    margin: '16px auto',
    backgroundColor: palette.primary.main
  },

  personalityIcon: {
    willChange: 'transform',
    transition: create('transform', duration.short, easing.sharp)
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
      <div>
        <Subtitle
          action={
            <Tooltip title={personality.subtitle}>
              <Info color={'action'} />
            </Tooltip>
          }>
          {personality.title}
        </Subtitle>
        <Divider />

        <List>
          {personality.results.map(result => (
            <CollapseState key={result.title}>
              {({ show, update }) => (
                <Card style={{margin: '8px 0'}}>
                  <ListItem
                    button
                    onClick={() => update(!show)}
                    key={result.title}>
                    <ListItemText
                      disableTypography
                      primary={result.title}
                      secondary={
                        <div>
                          <Typography variant={'caption'}>
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
                </Card>
              )}
            </CollapseState>
          ))}
        </List>
      </div>
    );
  };
  HobbiesInterests = () => {
    const props = this.props;
    return (
      <div>
        <Subtitle>Hobbies & Interests</Subtitle>
        <Divider />
        <CardContent>
          <Grid container spacing={16} justify={'center'}>
            {hobbiesInterests.map(item => (
              <Grid key={item.name} item md={4} sm={6} xs={6}>
                <Card className={props.classes.card}>
                  <Avatar className={props.classes.cardAvatar}>
                    {item.svg}
                  </Avatar>
                  <Typography
                    align={'center'}
                    style={{
                      margin: 'auto',
                      width: 100,
                      marginTop: 4,
                      color: 'white'
                    }}
                    variant={'subtitle2'}>
                    {item.name}
                  </Typography>
                </Card>
                {/* {Boolean(item.subtitle) && (
                    <Typography
                      style={{
                        margin: 'auto',
                        width: 100
                      }}
                      align={'center'}
                      variant={'caption'}>
                      {item.subtitle}
                    </Typography>
                  )} */}
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </div>
    );
  };
  render() {
    const props = this.props;
    const state = this.state;
    const isMobile = props.width === 'xs';
    return (
      <Container className={props.classes.aboutContainer}>
        <div id={'about'} />
        <Subheader>About</Subheader>
        <Snack
          onClose={this.handleClose}
          open={state.open}
          message={state.message}
        />
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
                <div id={'scrollTo'} />
                <Hidden smUp>
                  <Typography align={'left'} paragraph variant={'subtitle1'}>
                    {profile.summary[1]}
                  </Typography>
                  <Links handleOpen={this.handleOpen} />
                </Hidden>
              </Grid>
              {/* <Grid item sm={6} xs={12}>
                <this.Personality />
              </Grid>
              <Grid item sm={6} xs={12}>
                <this.HobbiesInterests />
              </Grid> */}
            </Grid>
          </div>
      </Container>
    );
  }
}
export default withStyles(styles)(About);
