import { Component } from 'react';
import s from './Clock.module.css';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    // console.log('setInterval');

    this.intervalId = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div className={s.clock}>{this.state.time}</div>;
  }
}
