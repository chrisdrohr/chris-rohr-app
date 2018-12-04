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
import OverlayCard from '../Custom/OverlayCard';
import CardStack from '../Custom/CardStack';
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
  cardStack: {
    minWidth: 500,
    minHeight: 500,
    overflow: 'visible',
    [breakpoints.down('sm')]: {
      padding: 16,
      width: '100vw',
      minHeight: 400,
      minWidth: window.innerWidth - 32,
      width: window.innerWidth - 32
    },
    [breakpoints.down('xs')]: {
      padding: 16,
      width: '100vw',
      minHeight: 520,
      minWidth: window.innerWidth - 32,
      width: window.innerWidth - 32
    }
  },
  container: {
    maxWidth: 1000,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: shadows[0],
    backgroundColor: 'transparent',
    [breakpoints.down('xs')]: {}
  },
  description: {
    [breakpoints.down('xs')]: {}
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
    show: false,
    message: ''
  };

  Personality = ({ display }) => {
    const props = this.props;

    return (
      <div>
        <CardContent>
          {!display && (
            <Typography variant={'caption'}>{personality.subtitle}</Typography>
          )}
          <List>
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
        </CardContent>
      </div>
    );
  };
  HobbiesInterests = ({ display }) => {
    const props = this.props;

    return (
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <CardContent>
          <Grid
            style={{ height: '100%' }}
            container
            spacing={16}
            justify={'center'}
            alignItems={'center'}>
            {hobbiesInterests.map(item => (
              <Grid key={item.name} item md={6} sm={4} xs={6}>
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
      </div>
    );
  };

  render() {
    const props = this.props;
    const state = this.state;
    const isMobile = props.width === 'xs';
    return (
      <Container noMargin={!isMobile} className={props.classes.container}>
        <Grid container spacing={16}>
          <Grid item md={6} xs={12}>
            <DisplayAvatar
              src={profile.photoURL.png}
              srcWebP={profile.photoURL.webp}
            />
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
            <CardStack
              titles={['Summary', 'Personality', 'Interests']}
              width={props.width}
              className={props.classes.cardStack}>
              <CardContent>
                <Typography
                  component={'div'}
                  className={props.classes.description}
                  align={'left'}
                  variant={'body1'}>
                  {profile.summary[0]}
                  {profile.summary[1]}
                  {profile.summary[2]}
                </Typography>
              </CardContent>
              <this.Personality />
              <this.HobbiesInterests />
            </CardStack>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default withStyles(styles)(Profile);
