import { useState, useEffect, useRef } from 'react';
import s from './Clock.module.css';

export default function Clock() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(
      () =>
        setTime(() => {
          console.log(new Date().toLocaleTimeString());
          new Date().toLocaleTimeString();
        }),
      1000,
    );

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return <div className={s.clock}>{time}</div>;
}
