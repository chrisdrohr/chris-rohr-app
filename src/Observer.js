import React from 'react';
import { links } from './Constants';
import { PageProvider } from './Context';

class Observer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 'profile'
    };
  }
  componentDidMount() {
    window.addEventListener('load', () => {
      this.observe();
    });
  }
  observe = async () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    this.observer = new IntersectionObserver(this.callback, options);
    await Object.values(links).map(async item => {
      const element = await document.getElementById(item.name);
      await this.observer.observe(element);
    });
  };

  callback = (entries, observer) => {
    entries.forEach(entry => {
      const { target, isIntersecting } = entry;
      console.log(target.id, isIntersecting)
      requestAnimationFrame(() => {
        switch (true) {
          case target.id === links.profile.name && isIntersecting:
            this.setState({ selected: links.profile.name });
            break;
          case target.id === links.resume.name && isIntersecting:
            this.setState({ selected: links.resume.name });
            break;
          case target.id === links.portfolio.name && isIntersecting:
            this.setState({ selected: links.portfolio.name });
            break;
          case target.id === links.music.name && isIntersecting:
            this.setState({ selected: links.music.name });
            break;
          default:
            return null;
        }
      });
    });
  };

  render() {
    return <PageProvider value={this.state.selected}>{this.props.children}</PageProvider>;
  }
}
export default Observer;
