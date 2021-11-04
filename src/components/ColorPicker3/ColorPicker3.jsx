import { Component } from 'react';
import classNames from 'classnames';
import s from './ColorPicker3.module.css';

class ColorPicker3 extends Component {
  state = {
    activOptionIdx: 0,
  };

  setActivIdx = index => {
    this.setState({ activOptionIdx: index });
  };

  render() {
    const { activOptionIdx } = this.state;
    const { options } = this.props;

    const { label } = options[activOptionIdx];

    return (
      <div className={s.container}>
        <h2 className={s.title}>Color Picker</h2>
        <p className={s.label}>
          Выбраный цвет:
          <span style={{ fontWeight: 700, color: label }}> {label}</span>
        </p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={classNames(
                s.option,
                index === this.state.activOptionIdx && s.active,
              )}
              style={{ backgroundColor: color }}
              onClick={() => this.setActivIdx(index)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker3;
