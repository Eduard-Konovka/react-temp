import { useState } from 'react';
import classNames from 'classnames';
import s from './ColorPicker.module.css';

export default function ColorPicker({ options }) {
  const [activOptionIdx, setActivOptionIdx] = useState(0);
  const { label } = options[activOptionIdx];

  return (
    <div className={s.container}>
      <h2 className={s.title}>Color Picker</h2>
      <p className={s.label}>
        Выбраный цвет:
        <span style={{ fontWeight: 700, color: label }}>{label}</span>
      </p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={classNames(
              s.option,
              index === activOptionIdx && s.active,
            )}
            style={{ backgroundColor: color }}
            onClick={() => setActivOptionIdx(index)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
