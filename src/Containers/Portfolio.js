import React from 'react';
import Container from '../Custom/Container';
import Subheader from '../Custom/Subheader';
import Img from '../Custom/CardMediaCR';
import { profile, links } from '../Constants';
import Cube from '../Custom/Cube';
import {
  Card,
  CardHeader,
  Grid,
  IconButton,
  withStyles,
  withWidth
} from '@material-ui/core';
import { Launch } from '@material-ui/icons';
import { toRenderProps, withState } from 'recompose';
const State = toRenderProps(withState('show', 'handleChange', false));

const maxWidth = 1000;
const padding = 8;
const height = {
  normal: 300 - padding,
  sm: (window.innerHeight - 96) / 2 - 96,
  xs: window.innerWidth - 96
};
const width = {
  normal: (maxWidth - 56) / 2 - padding,
  sm: window.innerWidth / 2 - 32,
  xs: window.innerWidth - 48
};
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
    width: width.normal,
    position: 'relative',
    height: height.normal,
    // transition: create('backgroundColor', duration.short, easing.easeOut),
    [breakpoints.down('sm')]: {
      width: width.sm,
      height: height.sm
    },
    [breakpoints.down('xs')]: {
      height: height.xs,
      width: width.xs
    }
  },

  header: {
    position: 'relative'
  },
  image: {
    height: height.normal,
    [breakpoints.down('sm')]: {
      height: height.sm
    },
    [breakpoints.down('xs')]: {
      height: height.xs
    }
  },
  moreTitle: {
    color: palette.primary.main,
    paddingBottom: 8
  },
  subheader: {
    color: palette.primary.main
  },
  title: {
    fontSize: '2rem',
    color: palette.secondary.main
  }
});
class Portfolio extends React.Component {
  state = {
    dialogTitle: '',
    dimensions: {},
    open: false,
    count: 0,
    interval: null
  };
  componentDidMount() {
    // if(this.props.visible) {
    //    setTimeout(async () => {
    //   let interval = await setInterval(this.count, 5000);
    //   await this.setState({ interval: interval });
    // }, 100);
    // }
  }
  componentDidUpdate(prevProps) {
    if (this.props.visible && this.state.interval === null) {
      setTimeout(async () => {
        let interval = await setInterval(this.count, 5000);
        await this.setState({ interval: interval });
      }, 100);
    } else if (!this.props.visible && this.state.interval !== null) {
      this.setState({ interval: null, count: 0 });
    }
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  count = () => {
    const state = this.state;
    requestAnimationFrame(() => {
      if (state.count >= 4) {
        this.setState({ count: 0 });
      } else {
        this.setState({ count: state.count + 1 });
      }
    });
  };

  render() {
    const props = this.props;
    const state = this.state;

    const { primary, secondary } = props.theme.palette;
    const colors1 = [
      secondary.light,
      primary.dark,
      secondary.main,
      primary.main,
      secondary.dark,
      primary.light
    ];
    const colors2 = [
      secondary.main,
      primary.dark,

      secondary.light,
      primary.light,

      secondary.dark,

      primary.main
    ];

    return (
      <Container noMargin={props.width !== 'xs'}>
        <Subheader icon={<links.portfolio.icon />}>
          {links.portfolio.name}
        </Subheader>

        <Grid container spacing={8}>
          {profile.projects
            .filter((item, i) => i < 4)
            .map((item, i) => (
              <Grid item key={i} sm={6} xs={12}>
                {/* <State>
                  {({ show, handleChange }) => (
                    <Card
                      style={{ backgroundColor: colors[i + state.count] }}
                      className={props.classes.card}>
                      {Boolean(item.images) && (
                        <Img
                          alt={item.name}
                          className={props.classes.image}
                          src={item.images[state.count].png}
                          srcWebP={item.images[state.count].webp}>
                          <CardHeader
                            style={{ alignItems: 'flex-start' }}
                            classes={{
                              title: props.classes.title
                            }}
                            action={
                              <IconButton
                                color={'secondary'}
                                style={{ color: 'white' }}
                                component={'a'}
                                href={item.link}
                                target={'_blank'}
                                variant={'contained'}>
                                <Launch />
                              </IconButton>
                            }
                            title={item.name}
                            subheader={item.description}
                          />
                          <CardHeader title={'Tech'} subheader={item.tech} />
                        </Img>
                      )}
                    </Card>
                  )}
                </State> */}
                <State>
                  {({ show, handleChange }) => (
                    <Cube
                      idValue={`${i}Cube`}
                      delay={i * 300}
                      width={props.width}
                      index={state.count}
                      content={
                        <React.Fragment>
                          <CardHeader
                            style={{ alignItems: 'flex-start' }}
                            classes={{
                              title: props.classes.title
                            }}
                            action={
                              <IconButton
                                color={'secondary'}
                                style={{ color: 'white' }}
                                component={'a'}
                                href={item.link}
                                target={'_blank'}
                                variant={'contained'}>
                                <Launch />
                              </IconButton>
                            }
                            title={item.name}
                            subheader={item.description}
                          />
                          <CardHeader title={'Tech'} subheader={item.tech} />
                        </React.Fragment>
                      }>
                      {item.images.map((url, i) => {
                        const color1 =
                          i === 0 ? colors1.reverse()[i] : colors1[i];
                        const color2 =
                          i === 2 ? colors2.reverse()[i + 1] : colors2[i + 1];
                        return (
                          <Card
                            key={i}
                            style={{
                              backgroundColor: i > 1 ? color1 : color2
                            }}
                            className={props.classes.card}>
                            {Boolean(url.png) && (
                              <Img
                                alt={item.name}
                                className={props.classes.image}
                                src={url.png}
                                srcWebP={url.webp}
                              />
                            )}
                          </Card>
                        );
                      })}
                    </Cube>
                  )}
                </State>
              </Grid>
            ))}
        </Grid>
      </Container>
    );
  }
}
export default withWidth()(withStyles(styles, { withTheme: true })(Portfolio));
