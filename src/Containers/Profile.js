import React from 'react';
import Container from '../Custom/Container';
import {
  Avatar,
  Card,
  CardContent,
  Collapse,
  Grid,
  LinearProgress,
  List,
  ListItem,
  Typography,
  withStyles
} from '@material-ui/core';
import { profile, hobbiesInterests, personality } from '../Constants';
import { KeyboardArrowDown } from '@material-ui/icons';
import Snack from '../Custom/Snack';
import OverlayCard from '../Custom/OverlayCard';
import Links from '../Components/Links';
import GrowDialog from '../Custom/GrowDialog';
import DisplayAvatar from '../Custom/DisplayAvatar';
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
  card: {
    backgroundColor: palette.primary.main,
    height: 100,
    width: 100,
    margin: 'auto'
  },
  cardAvatar: {
    margin: '16px auto',
    backgroundColor: palette.primary.main
  },
  container: {
    maxWidth: 1000,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    [breakpoints.down('xs')]: {
      marginTop: 32,
    }
  },
  description: {
    fontSize: '1.5rem',
    [breakpoints.down('xs')]: {
      fontSize: '1rem'
    }
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
    fontSize: '3rem',
    [breakpoints.down('xs')]: {
      fontSize: '2rem'
    }
  },
  subtitle: {
    fontSize: '1.5rem',
    [breakpoints.down('xs')]: {
      fontSize: '1rem'
    }
  }
});
class Profile extends React.Component {
  state = {
    componentKey: '',
    dialogTitle: '',
    open: false,
    show: false,
    message: ''
  };
  componentDidMount() {
    this.getDimensions();
  }
  getDimensions = async () => {
    await ['personality', 'hobbies'].map(async id => {
      const element = await document.getElementById(id);
      this[id] = element.getBoundingClientRect();
    });
  };
  openSnack = message => {
    this.setState({ show: true, message });
  };
  handleOpen = (componentKey, title) => {
    this.setState({
      dialogTitle: title,
      componentKey,
      open: true
    });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  closeSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ show: false });
  };
  Personality = ({ display }) => {
    const props = this.props;
    const Content = () => (
      <React.Fragment>
        {!display && (
          <Typography variant={'caption'}>{personality.subtitle}</Typography>
        )}
        <List style={{ height: display ? 150 : undefined }}>
          {personality.results.map(result => (
            <CollapseState key={result.title}>
              {({ show, update }) => (
                <Card style={{ margin: '8px 0' }}>
                  <ListItem
                    style={{ padding: display ? '5.5px 8px' : undefined }}
                    button
                    onClick={() => update(!show)}
                    key={result.title}>
                    <div style={{ width: '100%' }}>
                      <Typography
                        style={{ fontSize: display ? '0.5rem' : '1rem' }}
                        variant={'h4'}>
                        {result.title}
                      </Typography>
                      <Typography
                        style={{ fontSize: display ? '0.375rem' : undefined }}
                        paragraph
                        variant={'caption'}>
                        {result.subtitle}
                      </Typography>
                      <LinearProgress
                        style={{ height: display ? 4 : undefined }}
                        className={props.classes.progress}
                        color={result.score > 30 ? 'secondary' : 'primary'}
                        variant={'determinate'}
                        value={(result.score * 100) / 60}
                      />
                    </div>

                    <KeyboardArrowDown
                      className={props.classes.personalityIcon}
                      color={'action'}
                      style={{
                        height: display ? 12 : undefined,
                        width: display ? 12 : undefined,
                        transform: show ? 'rotate(0deg)' : 'rotate(180deg)'
                      }}
                    />
                  </ListItem>
                  <Collapse in={show}>
                    <CardContent style={{ padding: display ? 8 : undefined }}>
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
      </React.Fragment>
    );
    return (
      <div>
        {display ? (
          <OverlayCard
            id={'personality'}
            onClick={() => this.handleOpen('personality', personality.title)}
            title={personality.title}>
            <Content />
          </OverlayCard>
        ) : (
          <React.Fragment>
            <Content />
          </React.Fragment>
        )}
      </div>
    );
  };
  HobbiesInterests = ({ display }) => {
    const props = this.props;
    const Content = () => (
      <CardContent style={{ height: display ? 150 : undefined }}>
        <Grid
          style={{ height: '100%' }}
          container
          spacing={16}
          justify={'center'}
          alignItems={'center'}>
          {hobbiesInterests.map(item => (
            <Grid key={item.name} item md={4} sm={6} xs={6}>
              <Card
                style={{
                  height: display ? 50 : undefined,
                  width: display ? 50 : undefined
                }}
                className={props.classes.card}>
                <Avatar
                  style={{
                    margin: display ? '8px auto' : undefined,
                    height: display ? 20 : undefined,
                    width: display ? 20 : undefined
                  }}
                  className={props.classes.cardAvatar}>
                  <item.svg
                    style={{
                      color: 'white',
                      transform: display ? 'scale(0.5)' : undefined
                    }}
                  />
                </Avatar>
                <Typography
                  align={'center'}
                  style={{
                    margin: 'auto',
                    width: display ? 50 : 100,
                    marginTop: display ? 2 : 4,
                    color: 'white',
                    fontSize: display ? '0.435rem' : undefined
                  }}
                  variant={'subtitle2'}>
                  {item.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    );
    return (
      <div>
        {display ? (
          <OverlayCard
            id={'hobbies'}
            onClick={() => this.handleOpen('hobbies', 'Hobbies & Interests')}
            title={'Hobbies & Interests'}>
            <Content />
          </OverlayCard>
        ) : (
          <React.Fragment>
            <Content />
          </React.Fragment>
        )}
      </div>
    );
  };

  render() {
    const props = this.props;
    const state = this.state;
    const isMobile = props.width === 'xs';
    return (
      <Container noMargin={!isMobile} className={props.classes.container}>
            <Links isMobile={isMobile} handleOpen={this.openSnack} />       
        <Snack
          onClose={this.closeSnack}
          open={state.show}
          message={state.message}
        />
        <GrowDialog
          dimensions={
            state.componentKey === 'personality'
              ? this.personality
              : this.hobbies
          }
          open={state.open}
          onClose={this.handleClose}
          title={state.dialogTitle}>
          {state.componentKey === 'personality' ? (
            <this.Personality />
          ) : (
            <this.HobbiesInterests />
          )}
        </GrowDialog>
        <Grid container spacing={16}>
          <Grid item md={6} xs={12}>
            <DisplayAvatar src={profile.photoURL} />
            <Typography
              className={props.classes.title}
              align={'center'}
              color={'primary'}
              variant={'h2'}>
              {profile.name}
            </Typography>
            <Typography
              className={props.classes.subtitle}
              align={'center'}
              color={'secondary'}
              variant={'subtitle1'}>
              {profile.profession}
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
          <Card>
          <CardContent>
          <Typography
              className={props.classes.description}
              align={'left'}
              variant={'subtitle1'}>
              {profile.summary[1]}
            </Typography>
          </CardContent>
     
          </Card>
         
            <Grid style={{ paddingTop: 8 }} container spacing={16}>
              <Grid item xs={6}>
                <this.Personality display={true} />
              </Grid>
              <Grid item xs={6}>
                <this.HobbiesInterests display={true} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default withStyles(styles)(Profile);