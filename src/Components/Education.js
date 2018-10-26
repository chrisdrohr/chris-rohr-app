import React from 'react';
import Container from '../Custom/Container';
import Subheader from '../Custom/Subheader';
import { profile } from '../Constants';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Fade,
  Grid,
  ListItem,
  ListItemText,
  Typography,
  withStyles
} from '@material-ui/core';
import { School } from '@material-ui/icons';

const styles = ({
  breakpoints,
  palette,
  shadows,
  shape,
  spacing,
  transitions: { create, easing, duration },
  zIndex
}) => ({});
const Education = props => {
  return (
    <Container id={'education'}>
      <Subheader visible={props.visible}>Education</Subheader>
      <Fade in={props.visible}>
        <Grid container spacing={16}>
          {profile.education.map((item, i) => (
            <Grid key={i} item sm={6} xs={12}>
              <Card style={{ width: '100%' }}>
                <CardHeader
                  style={{ alignItems: 'flex-start' }}
                  avatar={
                    <Avatar>
                      <School />
                    </Avatar>
                  }
                  action={
                    <Typography
                      style={{ marginTop: 8, marginRight: 16 }}
                      variant={'caption'}>
                      {item.duration}
                    </Typography>
                  }
                  title={
                    <Typography
                      style={{ color: props.theme.palette.secondary.main }}
                      variant={'subtitle1'}>
                      {item.name}
                    </Typography>
                  }
                  disableTypography
                  subheader={
                    <div>
                      <Typography
                        variant={'subtitle2'}
                        style={{ color: props.theme.palette.primary.main }}>
                        {item.field}
                      </Typography>
                      <Typography variant={'caption'}>
                        {item.location}
                      </Typography>
                    </div>
                  }
                />
                <CardContent>
                  {Boolean(item.description) &&
                    item.description.map((value, i) => (
                      <ListItem dense key={i}>
                        <ListItemText secondary={value} />
                      </ListItem>
                    ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Fade>
    </Container>
  );
};
export default withStyles(styles)(Education);