import s from './ColorPicker1.module.css';

export default function ColorPicker1({ options }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Color Picker</h2>
      <div>
        {options.map(option => (
          <span
            key={option.label}
            className={s.option}
            style={{ backgroundColor: option.color }}
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
}
