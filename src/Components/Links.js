import React from 'react';
import { linkedIn, gitHub, resume, email } from '../Constants';
import { Description, Email } from '@material-ui/icons';
import { LinkedIn, GitHubComponent } from '../SVG/SVG';
import {
  Button,
  IconButton,
  Tooltip,
  withStyles,
} from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const styles = ({
  breakpoints,
  palette,
  shadows,
  shape,
  spacing,
  transitions: { create, easing, duration },
  zIndex
}) => ({
  container: {
    paddingTop: 4,
    display: 'flex'
  },
  aboutButton: {
    marginLeft: 'auto'
  },

  linkedInIcon: {
    fill: palette.action.active
  }
});
const Links = props => {
  return (
    <React.Fragment>
      <div className={props.classes.container}>
        {[
          {
            title: linkedIn.info,
            color: 'primary',
            component: 'a',
            href: linkedIn.link,
            target: '_blank',

            variant: 'outlined',
            icon: <LinkedIn className={props.classes.linkedInIcon} />,
            label: linkedIn.title
          },
          {
            title: gitHub.info,
            color: 'primary',
            component: 'a',
            href: gitHub.link,
            target: '_blank',

            variant: 'outlined',
            icon: <GitHubComponent className={props.classes.linkedInIcon} />,
            label: gitHub.title
          }
        ].map((button, i) => (
          <Tooltip key={i} title={button.title}>
            <IconButton
              onClick={button.onClick}
              component={button.component}
              href={button.href}
              target={button.target}>
              {button.icon}
            </IconButton>
          </Tooltip>
        ))}
        <CopyToClipboard
          text={email.email}
          onCopy={() => props.handleOpen(email.message)}>
          <Tooltip title={email.info}>
            <IconButton>
              <Email />
            </IconButton>
          </Tooltip>
        </CopyToClipboard>
        {[
          {
            title: resume.info,
            color: 'primary',
            component: 'a',
            href: resume.url,
            target: '_blank',
            style: { color: 'white' },
            variant: 'contained',
            icon: <Description style={{ marginRight: 5 }} />,
            label: resume.title
          }
        ].map((button, i) => (
          <Tooltip key={i} title={button.title}>
            <Button
              className={props.classes.aboutButton}
              onClick={button.onClick}
              color={button.color}
              component={button.component}
              href={button.href}
              target={button.target}
              size={button.size}
              style={button.style}
              variant={button.variant}>
              {button.icon}
              {button.label}
            </Button>
          </Tooltip>
        ))}
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Links);