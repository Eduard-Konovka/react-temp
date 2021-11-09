import { PureComponent } from 'react';
import s from './ColorPicker.module.css';

class ColorPicker extends PureComponent {
  state = {
    activOptionIdx: 0,
  };

  setActivIdx = index => {
    this.setState({ activOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = [s.option];

    index === this.state.activOptionIdx && optionClasses.push(s.active);

    return optionClasses.join(' ');
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
              className={this.makeOptionClassName(index)}
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

export default ColorPicker;
