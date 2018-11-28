import React, { Component, Fragment } from 'react';
import Container from '../Custom/Container';
import Subheader from '../Custom/Subheader';
import Img from '../Custom/ImgCR';
import { profile } from '../Constants';
import * as Core from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import { toRenderProps, withState } from 'recompose';
const State = toRenderProps(withState('show', 'handleChange', false));

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
    position: 'relative'
  },
  cardReveal: {
    width: '100%',
    height: 'fit-content',
    position: 'absolute',
    top: '100%',
    willChange: 'transform',
    transition: create('transform', duration.short, easing.easeOut)
  },
  image: {
    height: 400
  },
  moreTitle: {
    color: palette.primary.main,
    paddingBottom: 8
  },
  subheader: {
    color: palette.primary.main
  },
  title: {
    color: palette.secondary.main,
    paddingBottom: 8
  }
});

class Projects extends Component {
  render() {
    const props = this.props;
    return (
      <Container>
        <div id={'projects'} />
        <Subheader>Projects</Subheader>
          <Core.Grid container spacing={16}>
            {profile.projects.map((item, i) => (
              <Core.Grid item key={i} sm={12} xs={12}>
                <State>
                  {({ show, handleChange }) => (
                    <Core.Card className={props.classes.card}>
                      {Boolean(item.images) &&
                        (i < 2 ? (
                          <Core.Grid
                            container
                            spacing={16}
                            justify={'center'}
                            alignItems={'center'}>
                            <Core.Grid
                              style={{ height: 450 }}
                              item
                              sm={6}
                              xs={12}>
                              <Img
                                alt={item.name}
                                style={{ height: 450 }}
                                // className={props.classes.image}
                                src={item.images[0]}
                              />
                            </Core.Grid>

                            <Core.Grid item sm={6} xs={12}>
                              <Core.Grid
                                justify={'center'}
                                alignItems={'center'}
                                container
                                spacing={16}>
                                <Core.Grid item sm={12} xs={12}>
                                  <Img
                                    alt={item.name}
                                    // className={props.classes.image}
                                    src={item.images[1]}
                                  />
                                </Core.Grid>

                                <Core.Grid item sm={12} xs={12}>
                                  <Img
                                    alt={item.name}
                                    // className={props.classes.image}
                                    src={item.images[2]}
                                  />
                                </Core.Grid>
                              </Core.Grid>
                            </Core.Grid>
                          </Core.Grid>
                        ) : (
                          <Core.Grid
                            justify={'center'}
                            alignItems={'center'}
                            container
                            spacing={16}>
                            {item.images.map(url => (
                              <Core.Grid
                              style={{display: 'flex', justifyContent: 'center'}}
                              item sm={4} xs={12}>
                                <img
                                  alt={item.name}
                                  className={props.classes.image}
                                  src={url}
                                />
                              </Core.Grid>
                            ))}
                          </Core.Grid>
                        ))}
                      <Core.CardActionArea onClick={() => handleChange(true)}>
                        <Core.CardHeader
                          style={{ alignItems: 'flex-start' }}
                          classes={{
                            title: props.classes.title
                            // subheader: props.classes.subheader
                          }}
                          action={<Icon.MoreVert color={'action'}/>}
                          title={item.name}
                          subheader={item.description}
                        />
                      </Core.CardActionArea>
                      <Core.Card
                        className={props.classes.cardReveal}
                        style={{
                          transform: show
                            ? 'translateY(-100%)'
                            : 'translateY(0px)'
                        }}>
                        <Core.CardHeader
                          style={{ alignItems: 'flex-start' }}
                          classes={{
                            title: props.classes.moreTitle
                            // subheader: props.classes.subheader
                          }}
                          action={
                            <Core.IconButton
                              onClick={() => handleChange(false)}>
                              <Icon.Close />
                            </Core.IconButton>
                          }
                          title={'Tech'}
                          subheader={item.tech}
                        />

                        {Boolean(item.link) && (
                          <Fragment>
                            <Core.Divider />
                            <Core.CardActions>
                              <Core.Button
                                color={'secondary'}
                                style={{ color: 'white' }}
                                component={'a'}
                                href={item.link}
                                target={'_blank'}
                                variant={'contained'}>
                                <Icon.Launch
                                  style={{
                                    marginRight: 5
                                  }}
                                />
                                View
                              </Core.Button>
                            </Core.CardActions>
                          </Fragment>
                        )}
                      </Core.Card>
                    </Core.Card>
                  )}
                </State>
              </Core.Grid>
            ))}
          </Core.Grid>
      </Container>
    );
  }
}
export default Core.withStyles(styles)(Projects);
