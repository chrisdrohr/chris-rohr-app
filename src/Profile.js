import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { music, profile } from './Constants';
import * as Core from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import { DinnerParty } from './SVG';
import { BuildingA } from './Buildings';
import { scrollIntoView } from './Functions';
import { toRenderProps, withState } from 'recompose';
import ToggleIcon from 'material-ui-toggle-icon';
import Subheader from './Custom/Subheader';
import Container from './Custom/Container';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Header from './Components/Header';
import VisibilitySensor from 'react-visibility-sensor';

const styles = ({
  breakpoints,
  palette,
  shadows,
  shape,
  spacing,
  transitions: { create, easing, duration },
  zIndex
}) => ({
  artContainer: {
    overflow: 'hidden',
    boxShadow: shadows[4],
    transition: create(
      ['transform', 'box-shadow'],
      duration.short,
      easing.easeOut
    ),
    [breakpoints.up('sm')]: {
      '&:hover': {
        boxShadow: shadows[15],
        transform: 'scale(1.2)'
      }
    }
  },
  background: {
    position: 'absolute',
    right: 0,
    left: 0
  },

  container: {
    maxWidth: 1000,
    // paddingBottom: "10vh",
    margin: 'auto',
    [breakpoints.down('xs')]: {}
  },
  codeButton: {
    marginLeft: 'auto',
    marginTop: 16,
    [breakpoints.down('xs')]: {}
  },

  menuButton: {
    transition: create('transform', duration.short, easing.easeInOut),
    position: 'fixed',
    top: 16,
    left: 16,
    zIndex: zIndex.drawer + 1000,
    backgroundColor: palette.common.white
  },
  topButton: {
    transition: create('transform', duration.short, easing.sharp),
    position: 'fixed',
    bottom: 64,
    right: 32,
    [breakpoints.down('sm')]: {
      bottom: 32,
      right: 16
    }
  }
});
const DrawerHandler = toRenderProps(withState('open', 'update', false));

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = async (id, close) => {
    const element = await document.getElementById(id);
    if (element !== null) {
      await element.scrollIntoView({ behavior: 'smooth' });
    }
    await close;
  };
  CodeButton = () => {
    const props = this.props;
    return (
      <Core.Tooltip title={profile.code.info}>
        <Core.Fade in={true} style={{ transitionDelay: 1500 }}>
          <Core.Button
            component={'a'}
            href={profile.code.url}
            target={'_blank'}
            className={props.classes.codeButton}
            color={'primary'}
            size={'small'}
            style={{ color: 'white' }}
            variant={'outlined'}>
            <Icon.Code
              color={'primary'}
              style={{
                marginRight: 5
              }}
            />
            {profile.code.title}
          </Core.Button>
        </Core.Fade>
      </Core.Tooltip>
    );
  };

  SVG = ({ visible }) => {
    const props = this.props;
    const SVG = [
      { svg: <DinnerParty />, val: 9 },
      { svg: <BuildingA />, val: 3 }
    ];
    return (
      <Container id={'svg'}>
        <Subheader visible={visible}>SVG</Subheader>
        <Core.Fade in={visible}>
          <Core.Grid container spacing={8}>
            {SVG.map((item, i) => (
              <Core.Grid
                key={i}
                item
                xl={item.val}
                lg={item.val}
                md={item.val}
                sm={item.val}
                xs={12}>
                <Core.Paper className={props.classes.artContainer}>
                  <div style={{ marginBottom: -4 }}>{item.svg}</div>
                </Core.Paper>
              </Core.Grid>
            ))}
          </Core.Grid>
        </Core.Fade>
      </Container>
    );
  };

  Experience = ({ visible }) => {
    const props = this.props;
    return (
      <Container id={'experience'}>
        <Subheader visible={visible}>Experience</Subheader>
        <Core.Fade in={visible}>
          <Core.Grid container spacing={16}>
            {profile.experience.map((item, i) => (
              <Core.Grid key={i} item sm={6} xs={12}>
                <Core.Card style={{ width: '100%' }}>
                  <Core.CardHeader
                    style={{ alignItems: 'flex-start' }}
                    avatar={
                      <Core.Avatar>
                        <Icon.Work />
                      </Core.Avatar>
                    }
                    title={
                      <Core.Typography
                        style={{ color: props.theme.palette.secondary.main }}
                        variant={'subtitle1'}>
                        {item.position}
                      </Core.Typography>
                    }
                    disableTypography
                    subheader={
                      <div>
                        <Core.Typography paragraph variant={'caption'}>
                          {item.duration}
                        </Core.Typography>
                        <Core.Typography
                          variant={'subtitle2'}
                          style={{ color: props.theme.palette.primary.main }}>
                          {item.name}
                        </Core.Typography>
                        <Core.Typography variant={'caption'}>
                          {item.location}
                        </Core.Typography>
                      </div>
                    }
                  />
                  <Core.CardContent>
                    {Boolean(item.description) &&
                      item.description.map((value, i) => (
                        <Core.ListItem dense key={i}>
                          <Core.ListItemText secondary={value} />
                        </Core.ListItem>
                      ))}
                  </Core.CardContent>
                </Core.Card>
              </Core.Grid>
            ))}
          </Core.Grid>
        </Core.Fade>
      </Container>
    );
  };
  Education = ({ visible }) => {
    const props = this.props;
    return (
      <Container id={'education'}>
        <Subheader visible={visible}>Education</Subheader>
        <Core.Fade in={visible}>
          <Core.Grid container spacing={16}>
            {profile.education.map((item, i) => (
              <Core.Grid key={i} item sm={6} xs={12}>
                <Core.Card style={{ width: '100%' }}>
                  <Core.CardHeader
                    style={{ alignItems: 'flex-start' }}
                    avatar={
                      <Core.Avatar>
                        <Icon.School />
                      </Core.Avatar>
                    }
                    action={
                      <Core.Typography
                        style={{ marginTop: 8, marginRight: 16 }}
                        variant={'caption'}>
                        {item.duration}
                      </Core.Typography>
                    }
                    title={
                      <Core.Typography
                        style={{ color: props.theme.palette.secondary.main }}
                        variant={'subtitle1'}>
                        {item.name}
                      </Core.Typography>
                    }
                    disableTypography
                    subheader={
                      <div>
                        <Core.Typography
                          variant={'subtitle2'}
                          style={{ color: props.theme.palette.primary.main }}>
                          {item.field}
                        </Core.Typography>
                        <Core.Typography variant={'caption'}>
                          {item.location}
                        </Core.Typography>
                      </div>
                    }
                  />
                  <Core.CardContent>
                    {Boolean(item.description) &&
                      item.description.map((value, i) => (
                        <Core.ListItem dense key={i}>
                          <Core.ListItemText secondary={value} />
                        </Core.ListItem>
                      ))}
                  </Core.CardContent>
                </Core.Card>
              </Core.Grid>
            ))}
          </Core.Grid>
        </Core.Fade>
      </Container>
    );
  };
  Music = ({ visible }) => {
    return (
      <Container id={'music'}>
        <Subheader visible={visible}>Music</Subheader>
        <Core.Fade in={visible}>
          <Core.Grid container spacing={16}>
            {music.map((url, i) => {
              const isLast = i === 2;
              const size = isLast ? 12 : 6;
              return (
                <Core.Grid
                  key={i}
                  item
                  xl={size}
                  lg={size}
                  md={size}
                  sm={size}
                  xs={12}>
                  <Core.Card>
                    <iframe
                      title={url}
                      style={{ margin: '-4px 0 -4px 0' }}
                      width="100%"
                      height="300"
                      scrolling="no"
                      frameBorder="no"
                      src={url}
                    />
                  </Core.Card>
                </Core.Grid>
              );
            })}
          </Core.Grid>
        </Core.Fade>
      </Container>
    );
  };
  Drawer = () => {
    const props = this.props;
    return (
      <DrawerHandler>
        {({ open, update }) => (
          <div>
            <div>
              <Core.Button
                className={props.classes.menuButton}
                style={{
                  transform: open ? 'translateX(140px)' : 'translateX(0px)'
                }}
                onClick={() => update(!open)}
                variant={'fab'}>
                <ToggleIcon
                  on={open}
                  offIcon={<Icon.Menu />}
                  onIcon={<Icon.ArrowBack />}
                />
              </Core.Button>
            </div>
            <Core.SwipeableDrawer
              style={{ width: 190 }}
              onClose={() => update(false)}
              onOpen={() => update(true)}
              open={open}>
              <Core.List>
                {profile.links.map(item => (
                  <Core.ListItem
                    key={item.id}
                    button
                    onClick={async () => {
                      await this.onClick(item.id, () => update(false));
                    }}>
                    <Core.ListItemIcon>{item.icon}</Core.ListItemIcon>
                    <Core.ListItemText secondary={item.name} />
                  </Core.ListItem>
                ))}
              </Core.List>
            </Core.SwipeableDrawer>
          </div>
        )}
      </DrawerHandler>
    );
  };
  TopButton = ({ visible }) => {
    const props = this.props;
    return (
      <div>
        <Core.Tooltip title={'Scroll to top'}>
          <Core.Button
            onClick={() => scrollIntoView('appBar')}
            className={props.classes.topButton}
            style={{
              transform: visible ? 'translateY(0px)' : 'translateY(150px)'
            }}
            color={'primary'}
            variant={'fab'}>
            <Icon.ArrowUpward />
          </Core.Button>
        </Core.Tooltip>
        <div style={{ height: 150 }} />
      </div>
    );
  };

  render() {
    const props = this.props;
    const Visible = props => (
      <VisibilitySensor
        offset={props.offset}
        minTopValue={props.minTop ? props.minTop : 100}
        partialVisibility={true}>
        {props.children}
      </VisibilitySensor>
    );
    const components = [
      <Visible key={0}>
        {({ isVisible }) => <Header width={props.width} visible={isVisible} />}
      </Visible>,
      <Visible key={1}>
        {({ isVisible }) => <About visible={isVisible} />}
      </Visible>,
      <Visible key={2}>
        {({ isVisible }) => <Skills visible={isVisible} />}
      </Visible>,
      <Visible key={8}>
        {({ isVisible }) => <Projects visible={isVisible} />}
      </Visible>,
      <Visible key={9}>
        {({ isVisible }) => <this.Experience visible={isVisible} />}
      </Visible>,
      <Visible key={10}>
        {({ isVisible }) => <this.Education visible={isVisible} />}
      </Visible>,
      <Visible key={11}>
        {({ isVisible }) => <this.SVG visible={isVisible} />}
      </Visible>,
      <Visible key={12}>
        {({ isVisible }) => <this.Music visible={isVisible} />}
      </Visible>
    ];
    return (
      <div id={'container'}>
        <Core.Toolbar id={'appBar'} variant={'dense'}>
          <this.CodeButton />
        </Core.Toolbar>
        <this.Drawer />
        <div className={props.classes.container}>
          {components.map(Component => Component)}
        </div>
        <Visible minTop={0}>
          {({ isVisible }) => <this.TopButton visible={isVisible} />}
        </Visible>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Profile);
