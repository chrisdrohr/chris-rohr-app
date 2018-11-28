import React from 'react';
import { Grid } from '@material-ui/core';
import { links } from '../Constants';
import Container from '../Custom/Container';
import Subheader from '../Custom/Subheader';
import Education from '../Components/Education';
import Experience from '../Components/Experience';
import Skills from '../Components/Skills';

const Resume = props => {
  return (
    <Container noMargin={props.width !== 'xs'}>
      <Subheader icon={<links.resume.icon />}>{links.resume.name}</Subheader>
      <Grid container spacing={16}>
        <Grid item md={6} xs={12}>
          <Experience />
          <Education />
        </Grid>
        <Grid item md={6} xs={12}>
          <Skills />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Resume;
