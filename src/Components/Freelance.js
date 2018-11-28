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
import Portfolio from '../Containers/Portfolio';
import Links from './Links';
import Img from '../Custom/ImgCR';
import Snack from '../Custom/Snack';
import { freelance, profile, email } from '../Constants';
import { toRenderProps, withState } from 'recompose';
import Logo from '../SVG/Logo.svg';
const SnackState = toRenderProps(withState('message', 'update', ''));

const styles = ({
  breakpoints,
  palette,
  shadows,
  transitions: { create, duration, easing }
}) => ({
  about: {
    [breakpoints.down('xs')]: {
    }
  },
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
    padding: 0
  },
  content: {
  },
  divider: {
    marginTop: 16,
    marginBottom: 16
  },
  header: {
    width: '100%'
  },
  headerImage: {
    objectFit: 'contain',
    height: '20vh',
    width: '100%',
    margin: 'auto',
    borderRadius: 8,
  },
  headerTitle: {
    paddingTop: '5vh'
  },
  image: {
    marginBottom: 8,
    margin: 'auto',
    borderRadius: 8,
  },
  title: {
    paddingTop: 16,
    paddingBottom: 16,
    color: palette.text.secondary
  }
});

const Container = props => (
  <Card style={props.style} className={props.className}>
    <CardContent>{props.children}</CardContent>
  </Card>
);
class Freelance extends Component {


  Header = () => {
    const props = this.props;
    return (
      <div className={props.classes.header}>
        <img
          className={props.classes.headerImage}
          alt={freelance.header.title}
          src={Logo}
        />
        <Typography
        align={'center'}
        className={props.classes.headerTitle}
        paragraph
        variant={'h2'}>
        {freelance.header.title}
      </Typography>
      </div>
    );
  };
  AboutComponent = () => {
    const props = this.props;
    const isMobile = props.width === 'xs';
    return (
      <SnackState>
        {({ message, update }) => (
          <Container className={props.classes.about}>
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
            <Hidden smUp>
              <Typography align={'left'} paragraph variant={'subtitle1'}>
                {profile.summary[1]}
              </Typography>
              <Links handleOpen={update} />
            </Hidden>
          </Container>
        )}
      </SnackState>
    );
  };
  WhatIDo = () => {
    const props = this.props;
    return (
      <Container>
        <Img 
         rootClassName={props.classes.image}
        alt={freelance.whatIDo.title} src={freelance.whatIDo.url} />
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
                  rootClassName={props.classes.image}
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
        <Img
         rootClassName={props.classes.image}
        alt={freelance.process.title} src={freelance.process.url} />
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
                  rootClassName={props.classes.image}
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
    const props = this.props;
    return (
      <Container>
        <Img 
         rootClassName={props.classes.image}
        alt={freelance.project.title} src={freelance.project.url} />
        <Typography className={props.classes.title} paragraph variant={'h4'}>
          {freelance.project.title}
        </Typography>
        <Portfolio />
      </Container>
    );
  };
  Cost = () => {
    const props = this.props;
    return (
      <Container>
        <Img
          rootClassName={props.classes.image}
          alt={freelance.cost.title}
          src={freelance.cost.url}
        />
        <Typography className={props.classes.title} paragraph variant={'h4'}>
          {freelance.cost.title}
        </Typography>
        <Grid container spacing={16}>
          {freelance.cost.list.map((item, i) => (
            <Grid item sm={i === 2 ? 12 : 6} xs={12}>
              <div>
                <Img
                  style={{ objectFit: 'contain' }}
                  rootClassName={props.classes.image}
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
          rootClassName={props.classes.image}
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
  Footer = () => {
    return (
      <Container style={{width: '100%'}}>
        <SnackState>
          {({ message, update }) => (
            <React.Fragment>
              <Snack
                onClose={() => update('')}
                open={message !== ''}
                message={message}
              />
              <Typography align={'left'} paragraph variant={'subtitle1'}>
                {freelance.footer.title}
               <span>
               <a style={{color: 'white'}} href={"mailto:"+ email.email}>{email.email}</a>
               </span>
              </Typography>
              <Links handleOpen={update} />
            </React.Fragment>
          )}
        </SnackState>
      </Container>
    );
  };
  render() {
    const props = this.props;
    return (
      <React.Fragment>
       
        <div className={props.classes.container}>
          <List>
            {[
              <this.Header />,
              <this.AboutComponent />,
              <this.WhatIDo />,
              <this.Process />,
              <this.ProjectsComponent />,
              <this.Cost />,
              <this.Footer />
            ].map((component, i) => (
              <ListItem key={i}>{component}</ListItem>
            ))}
          </List>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(withWidth()(Freelance));
