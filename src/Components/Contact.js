//@flow
import React, { Component } from 'react';
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Hidden,
  InputAdornment,
  TextField,
  Typography,
  withStyles
} from '@material-ui/core';
import ToggleIcon from 'material-ui-toggle-icon';
import { database } from '../firebase';
import { Check, Send, Message, Person, Email } from '@material-ui/icons';

const styles = ({ breakpoints, palette }) => ({
  flexEnd: {
    justifyContent: 'flex-end'
  },
  header: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  paper: {
    margin: 'auto',
    borderRadius: '50%'
  },
  cardContainer: {
    margin: 'auto'
  },
  graphicContainer: {
    backgroundColor: palette.primary.main,
    borderRadius: "0px 32px 0px 0px"
  },
  sendButton: {
    marginTop: -128,
    marginLeft: 'calc(100% - 56px)',
    position: 'relative',
    right: 16,
    color: 'white'
  },
  title: {
    paddingTop: 8
  }
});

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      photoURL: '',
      saved: false
    };
  }

  componentDidMount() {
    this.ref = database().ref('contacts');
  }
  onChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  resetData = () => {
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  };
  send = () => {
    const { name, email, message } = this.state;
    this.ref.push({ name, email, message }).then(() => {
      this.setState({ saved: true });
      setTimeout(this.resetData, 1000);
    });
  };

  render() {
    const props = this.props;
    const state = this.state;
    const isValid = [state.name, state.email, state.message].every(
      v => v.length !== 0
    );
    return (
      <div>
        <Card className={props.classes.card}>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <CardContent>{props.children}</CardContent>
            </Grid>
            <Hidden smDown>
              <Grid item md={4} className={props.classes.graphicContainer}>
                <CardContent>
                  <Typography style={{ color: 'white' }} variant={'h6'}>
                    Send A Message
                  </Typography>
                </CardContent>
              </Grid>
            </Hidden>
            <Grid item md={8} sm={12} xs={12}>
              <Hidden mdUp>
                <Divider />
              </Hidden>
              <CardContent>
                <Hidden mdUp>
                  <Typography color={'secondary'} variant={'h6'}>
                    Send A Message
                  </Typography>
                </Hidden>
                <form autoComplete="on">
                {[
                  {
                    name: 'name',
                    label: 'Name',
                    icon: <Person color={'action'} />,
                    type: 'text',
                  },
                  {
                    name: 'email',
                    label: 'Email',
                    icon: <Email color={'action'} />,
                    type: 'email',
                  },
                  {
                    adornmentStyle: { marginTop: -70 },
                    name: 'message',
                    label: 'Message',
                    icon: <Message color={'action'} />,
                    multiline: true,
                    rowsMax: 5,
                    rows: 5,
                    style: { width: 'calc(100% - 56px)' },
                    type: 'text',
                  }
                ].map(field => (
                  <TextField
                    key={field.name}
                    fullWidth
                    onChange={this.onChange(field.name)}
                    id={field.name}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          style={field.adornmentStyle}
                          position={'start'}>
                          {field.icon}
                        </InputAdornment>
                      )
                    }}
                    label={field.label}
                    margin={'normal'}
                    multiline={field.multiline}
                    rows={field.rows}
                    style={field.style}
                    type={field.type}
                    value={state[field.name]}
                  />
                ))}
                </form>
              </CardContent>
              <Button
                className={props.classes.sendButton}
                disabled={!isValid}
                variant={'fab'}
                onClick={state.saved ? undefined : this.send}
                color={'primary'}>
                <ToggleIcon
                  on={state.saved}
                  onIcon={<Check />}
                  offIcon={<Send />}
                />
              </Button>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
