
import React from 'react';
import Container from '../Custom/Container';
import Subheader from '../Custom/Subheader';
import DinnerParty from '../SVG/DinnerParty';
import { BuildingA } from '../SVG/Buildings';
import {
    Fade,
    Grid,
    Paper,
    withStyles,
} from '@material-ui/core';
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
  
  });
const GraphicDesign = (props) => {
    const SVG = [
      { svg: <DinnerParty />, val: 9 },
      { svg: <BuildingA />, val: 3 }
    ];
    return (
      <Container id={'graphicDesign'}>
      <div id={'graphicDesign'}/>
        <Subheader visible={props.visible}>Graphic Design</Subheader>
        <Fade in={props.visible}>
          <Grid container spacing={8}>
            {SVG.map((item, i) => (
              <Grid
                key={i}
                item
                xl={item.val}
                lg={item.val}
                md={item.val}
                sm={item.val}
                xs={12}>
                <Paper className={props.classes.artContainer}>
                  <div style={{ marginBottom: -4 }}>{item.svg}</div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Fade>
      </Container>
    );
  };
  export default withStyles(styles)(GraphicDesign)