import React, { Component } from 'react';
import { profile } from './Constants';
import {
  Button,
  Fade,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Tooltip,
  withStyles
} from '@material-ui/core';
import { ArrowUpward, ArrowBack, Code, Menu } from '@material-ui/icons';
import { scrollIntoView } from './Functions';
import { toRenderProps, withState } from 'recompose';
import ToggleIcon from 'material-ui-toggle-icon';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Education from './Components/Education';
import GraphicDesign from './Components/GraphicDesign';
import Music from './Components/Music';
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
  background: {
    position: 'absolute',
    right: 0,
    left: 0
  },

  container: {
    maxWidth: 1000,
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
    zIndex: zIndex.drawer + 1000,
    backgroundColor: palette.common.white,
    [breakpoints.up('sm')]: {
      top: 16,
      left: 16,
    },
    [breakpoints.down('xs')]: {
      bottom: 32,
      left: 16,
    }
  },
  topButton: {
    transition: create('transform', duration.short, easing.sharp),
    position: 'fixed',
    bottom: 64,
    right: 32,
    [breakpoints.down('sm')]: {
      bottom: 32,
      right: 16
    },
  }
});
const DrawerHandler = toRenderProps(withState('open', 'update', false));

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

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
      <Tooltip title={profile.code.info}>
        <Fade in={true} style={{ transitionDelay: 1500 }}>
          <Button
            component={'a'}
            href={profile.code.url}
            target={'_blank'}
            className={props.classes.codeButton}
            color={'primary'}
            size={'small'}
            style={{ color: 'white' }}
            variant={'outlined'}>
            <Code
              color={'primary'}
              style={{
                marginRight: 5
              }}
            />
            {profile.code.title}
          </Button>
        </Fade>
      </Tooltip>
    );
  };

  Drawer = () => {
    const props = this.props;
    return (
      <DrawerHandler>
        {({ open, update }) => (
          <div>
            <div 
            // style={{
            //   transform: open ? 'translateX(140px)' : 'translateX(0px)'
            // }}
            className={props.classes.menuButtonContainer}>
              <Button
                className={props.classes.menuButton}
                style={{
                  transform: open ? 'translateX(162px)' : 'translateX(0px)'
                }}
                onClick={() => update(!open)}
                variant={'fab'}>
                <ToggleIcon
                  on={open}
                  offIcon={<Menu />}
                  onIcon={<ArrowBack />}
                />
              </Button>
            </div>
            <SwipeableDrawer
              style={{ width: 190 }}
              onClose={() => update(false)}
              onOpen={() => update(true)}
              open={open}>
              <List>
                {profile.links.map(item => (
                  <ListItem
                    key={item.id}
                    button
                    onClick={async () => {
                      await this.onClick(item.id, () => update(false));
                    }}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText secondary={item.name} />
                  </ListItem>
                ))}
              </List>
            </SwipeableDrawer>
          </div>
        )}
      </DrawerHandler>
    );
  };
  TopButton = ({ visible }) => {
    const props = this.props;
    return (
      <div>
        <Tooltip title={'Scroll to top'}>
          <Button
            onClick={() => scrollIntoView('appBar')}
            className={props.classes.topButton}
            style={{
              transform: visible ? 'translateY(0px)' : 'translateY(150px)'
            }}
            color={'primary'}
            variant={'fab'}>
            <ArrowUpward style={{color: 'white'}}/>
          </Button>
        </Tooltip>
        <div style={{ height: 150 }} />
      </div>
    );
  };

  render() {
    const props = this.props;
    const Visible = props => (
      <VisibilitySensor
        offset={props.offset}
        minTopValue={props.minTop ? props.minTop : 50}
        partialVisibility={true}>
        {props.children}
      </VisibilitySensor>
    );
    const components = [
      <Visible key={0}>
        {({ isVisible }) => <Header width={props.width} visible={isVisible} />}
      </Visible>,
      <Visible key={1}>
        {({ isVisible }) => <About width={props.width} visible={isVisible} />}
      </Visible>,
      <Visible key={2}>
        {({ isVisible }) => <Skills visible={isVisible} />}
      </Visible>,
      <Visible key={4}>
        {({ isVisible }) => <Projects visible={isVisible} />}
      </Visible>,
      <Visible key={5}>
        {({ isVisible }) => <Experience visible={isVisible} />}
      </Visible>,
      <Visible key={6}>
        {({ isVisible }) => <Education visible={isVisible} />}
      </Visible>,
      <Visible key={7}>
        {({ isVisible }) => <GraphicDesign visible={isVisible} />}
      </Visible>,
      <Visible key={8}>
        {({ isVisible }) => <Music visible={isVisible} />}
      </Visible>
    ];
    return (
      <div id={'container'}>
        <Toolbar id={'appBar'} variant={'dense'}>
          <this.CodeButton />
        </Toolbar>
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
