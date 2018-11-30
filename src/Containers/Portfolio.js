import React from 'react';
import Container from '../Custom/Container';
import Subheader from '../Custom/Subheader';
import Img from '../Custom/CardMediaCR';
import { profile, links } from '../Constants';
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

const height = (window.innerHeight - 96) / 2 - 64;
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
    width: '100%',
    position: 'relative',
    height: height,
    transition: create('backgroundColor', duration.short, easing.easeOut),
    [breakpoints.down('xs')]: {
      height: 300
    }
  },
  cardReveal: {
    width: '100%',
    height: 'fit-content',
    position: 'absolute',
    top: '100%',
    willChange: 'transform',
    transition: create('transform', duration.short, easing.easeOut)
  },
  header: {
    position: 'relative'
  },
  image: {
    height: height,
    [breakpoints.down('xs')]: {
      height: 300
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
    setTimeout(async () => {
         let interval = await setInterval(this.count, 4000)
    await this.setState({ interval: interval });
    }, 10000)
 
  }
  // componentDidUpdate(prevProps) {
  //   if (this.state.interval === null && this.props.visible) {
  //   console.log(this.props)

  //     let interval = setInterval(() => this.count(), 3000);
  //     this.setState({ interval: interval });
  //   } else {
  //     clearInterval(this.state.interval);
  //   }
  // }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  count = () => {
    const state = this.state;
    requestAnimationFrame(() => {
      if (state.count > 1) {
        this.setState({ count: 0 });
      } else {
        this.setState({ count: state.count + 1 });
      }
    })
  };

  render() {
    const props = this.props;
    const state = this.state;

    const { primary, secondary } = props.theme.palette;
    const colors = [
      primary.dark,
      secondary.light,
      secondary.main,
      primary.main,
      secondary.dark,
      primary.light
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
                <State>
                  {({ show, handleChange }) => (
                    <Card
                      style={{ backgroundColor: colors[i + state.count] }}
                      className={props.classes.card}>
                      {Boolean(item.images) && (
                        <Img
                          alt={item.name}
                          className={props.classes.image}
                          src={item.images[state.count]}>
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
                </State>
              </Grid>
            ))}
        </Grid>
      </Container>
    );
  }
}
export default withWidth()(withStyles(styles, { withTheme: true })(Portfolio));
