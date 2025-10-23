import { useEffect, useRef, useState } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
        intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
        clearInterval(intervalRef.current!)
    }

    return () => {clearInterval(intervalRef.current!)};
  }, [isRunning]);

  const startStopHandler = () => setIsRunning(!isRunning);
  const resetHandler = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <p>
        {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
        {('0' + Math.floor((time / 1000) % 60)).slice(-2)}:
        {('0' + Math.floor((time / 10) % 100)).slice(-2)}
      </p>
      <button onClick={startStopHandler}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}
