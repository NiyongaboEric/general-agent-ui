import { useRef, useState, useEffect } from 'react';
import countdownStyle from './countdownTimer.module.css';

const CountdownTimerHelper = (props) => {
  const { timerDays, timerHours, timerMinutes, timerSecond } = props;
  return (
    <section className={countdownStyle.timerContainer}>
      <section className={countdownStyle.timer}>
        <section>
          <p>{timerDays}</p>
          <p><small>Days</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timerHours}</p>
          <p><small>Hrs</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timerMinutes}</p>
          <p><small>Min</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timerSecond}</p>
          <p><small>Sec</small></p>
        </section>
      </section>
    </section>
  )
};

export const CountdownTimer = (props) => {
  const { targetTime } = props;  
  const [ timerDays, setTimerDays ] = useState('00');
  const [ timerHours, setTimerHours ] = useState('00');
  const [ timerMinutes, setTimerMinutes ] = useState('00');
  const [ timerSecond, setTimerSeconds ] = useState('00');
  let interval = useRef();

  const startTimer = (deadlineTime) => {
    const countdown = new Date(deadlineTime).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdown - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000)
  };

  useEffect (() => {
    startTimer(targetTime);
    return () => {
      clearInterval(interval.current)
    }
  }, [targetTime]);

  return (
    <CountdownTimerHelper
      timerDays={timerDays}
      timerHours={timerHours}
      timerMinutes={timerMinutes}
      timerSecond={timerSecond}
    />
  );
};
