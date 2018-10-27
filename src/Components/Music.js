import React from 'react';
import Container from '../Custom/Container';
import Subheader from '../Custom/Subheader';
import { music } from '../Constants';
import { Card, Fade, Grid, withStyles } from '@material-ui/core';

const styles = ({
  breakpoints,
  palette,
  shadows,
  shape,
  spacing,
  transitions: { create, easing, duration },
  zIndex
}) => ({});

const Music = props => {
  return (
    <Container>
    <div id={'music'}/>
      <Subheader visible={props.visible}>Music</Subheader>
      <Fade in={props.visible}>
        <Grid container spacing={16}>
          {music.map((url, i) => {
            const isLast = i === 2;
            const size = isLast ? 12 : 6;
            return (
              <Grid
                key={i}
                item
                xl={size}
                lg={size}
                md={size}
                sm={size}
                xs={12}>
                <Card>
                  <iframe
                    title={url}
                    style={{ margin: '-4px 0 -4px 0' }}
                    width="100%"
                    height="300"
                    scrolling="no"
                    frameBorder="no"
                    src={url}
                  />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Fade>
    </Container>
  );
};
export default withStyles(styles)(Music);
