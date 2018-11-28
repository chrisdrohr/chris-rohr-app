import { Card, withStyles } from '@material-ui/core';
import React from 'react';
import classnames from 'classnames';

const styles = ({ breakpoints }) => ({
  container: {
    marginTop: 8,
    marginBottom: 8
  },
  content: {
    padding: 16,

    [breakpoints.down('xs')]: {
      padding: 8,
    }
  }
});
const Container = props => (
  <Card
    className={classnames({
      [props.classes.container]: !props.noMargin,
      [props.className]: Boolean(props.className)
    })}
    id={props.id}>
    <div className={props.classes.content}>{props.children}</div>
  </Card>
);
export default withStyles(styles)(Container);
