import { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';
import Value from './Value';
import s from './Counter.module.css';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };

  state = {
    value: this.props.initialValue,
  };

  hendleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  hendleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <div className={s.counter}>
        <Value value={value} />
        <Controls
          onIncrement={this.hendleIncrement}
          onDecrement={this.hendleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
