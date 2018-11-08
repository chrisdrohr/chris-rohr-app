import React, { Component } from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  List,
  ListItem,
  Hidden,
  Typography,
  withStyles,
  withWidth
} from '@material-ui/core';
import Projects from './Projects';
import Links from './Links';
import Img from '../Custom/ImgCR';
import Snack from '../Custom/Snack';
import { freelance, profile } from '../Constants';
import { toRenderProps, withState } from 'recompose';
const SnackState = toRenderProps(withState('message', 'update', ''));

const styles = ({
  breakpoints,
  palette,
  shadows,
  transitions: { create, duration, easing }
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
  container: {
    margin: 'auto',
    maxWidth: 800,
    padding: 8
  },
  content: {
    // display: 'flex',
  },
  divider: {
    marginTop: 16,
    marginBottom: 16
  },
  image: {
    // height: 150,
    // width: 80,
    margin: 'auto'
  },
  title: {
    paddingTop: 16,
    paddingBottom: 16,
    color: palette.text.secondary
  }
});

const Container = props => (
  <Card>
    <CardContent>{props.children}</CardContent>
  </Card>
);
class Freelance extends Component {
  AboutComponent = () => {
    const props = this.props;
    const isMobile = props.width === 'xs';
    return (
      <SnackState>
        {({message, update}) => (
          <Container>
            <Snack
              onClose={() => update('')}
              open={message !== ''}
              message={message}
            />
            <Hidden smUp>
              <Avatar className={props.classes.avatar} src={profile.photoURL} />
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
                <Typography align={'left'} paragraph={!isMobile} variant={'h6'}>
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
                    <Links handleOpen={update} />
                  </Hidden>
                </React.Fragment>
              }
            />
          </Container>
        )}
      </SnackState>
    );
  };
  WhatIDo = () => {
    const props = this.props;
    return (
      <Container>
        <Img alt={freelance.whatIDo.title} src={freelance.whatIDo.url} />
        <Typography className={props.classes.title} paragraph variant={'h4'}>
          {freelance.whatIDo.title}
        </Typography>
        <Typography variant={'subtitle1'}>
          {freelance.whatIDo.subtitle}
        </Typography>
        <Divider className={props.classes.divider} />

        <Grid container spacing={16}>
          {freelance.whatIDo.list.map(item => (
            <Grid item xs={4}>
              <div>
                <Img
                  style={{ objectFit: 'contain' }}
                  className={props.classes.image}
                  alt={item.title}
                  src={item.url}
                />
                <Typography align={'center'} variant={'h6'}>
                  {item.title}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };

  Process = () => {
    const props = this.props;
    return (
      <Container>
        <Img alt={freelance.process.title} src={freelance.process.url} />
        <div>
          <Typography className={props.classes.title} paragraph variant={'h4'}>
            {freelance.process.title}
          </Typography>
          <Typography variant={'body2'}>
            {freelance.process.subtitle}
          </Typography>
        </div>
        <Grid container spacing={16}>
          {freelance.process.list.map((item, i) => (
            <Grid item sm={i === 4 ? 12 : 6} xs={12}>
              <div>
                <Img
                  style={{ objectFit: 'contain' }}
                  className={props.classes.image}
                  alt={item.title}
                  src={item.url}
                />
                <div>
                  <Typography paragraph variant={'h6'}>
                    {item.title}
                  </Typography>
                  <Typography variant={'body2'}>{item.subtitle}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };
  ProjectsComponent = () => {
    return (
      <Container>
        <Projects />
      </Container>
    );
  };
  Cost = () => {
    const props = this.props;
    return (
      <Container>
        <Img
          className={props.classes.image}
          alt={freelance.cost.title}
          src={freelance.cost.url}
        />
        <Typography className={props.classes.title} paragraph variant={'h4'}>
          {freelance.cost.title}
        </Typography>
        <Grid container spacing={16}>
          {freelance.cost.list.map((item, i) => (
            <Grid item sm={i === 4 ? 12 : 6} xs={12}>
              <div>
                <Img
                  style={{ objectFit: 'contain' }}
                  className={props.classes.image}
                  alt={item.title}
                  src={item.url}
                />
                <div>
                  <Typography paragraph variant={'h6'}>
                    {item.title}
                  </Typography>
                  <Typography variant={'body2'}>{item.subtitle}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <Divider className={props.classes.divider} />
        <Img
          style={{ objectFit: 'contain' }}
          className={props.classes.image}
          alt={freelance.cost.title}
          src={freelance.cost.infoUrl}
        />
        <Typography variant={'body2'}>{freelance.cost.infoSubtitle}</Typography>
        <Divider className={props.classes.divider} />

        <Typography paragraph variant={'h6'}>
          {freelance.cost.footerTitle}
        </Typography>
        <Typography variant={'body2'}>
          {freelance.cost.footerDescription}
        </Typography>
      </Container>
    );
  };
  render() {
    const props = this.props;
    return (
      <div className={props.classes.container}>
        <List>
          {[
            <this.AboutComponent />,
            <this.WhatIDo />,
            <this.Process />,
            <this.ProjectsComponent />,
            <this.Cost />
          ].map((component, i) => (
            <ListItem key={i}>{component}</ListItem>
          ))}
        </List>
      </div>
    );
  }
}
export default withStyles(styles)(withWidth()(Freelance));
