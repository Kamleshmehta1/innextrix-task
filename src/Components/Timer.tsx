import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type timerTypes = {
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  isRunning: boolean;
};

const Stopwatch = (props: timerTypes) => {
  const [time, setTime] = useState(0);
  const { isRunning } = props;

  useEffect(() => {
    let intervalId: any;
    if (isRunning) {
      intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const minutes: number = Math.floor((time % 360000) / 6000);
  const seconds: number = Math.floor((time % 6000) / 100);

  return (
    <span className="dialed-user-number">
      {minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
    </span>
  );
};

export default Stopwatch;
