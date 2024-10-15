import { useEffect, useState } from "react";

interface CounterProps {
  date: Date;
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Counter: React.FC<CounterProps> = ({ date }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = date.getTime() - Date.now();

    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  return (
    <div>
      {timeLeft.days !== undefined ? (
        <div className="flex gap-4">
          <div className="counter--box">
            <p className="text-white font-[800]">{timeLeft.days}</p>
            <span className="text-neutral-500 text-xs">Days</span>
          </div>
          <div className="counter--box">
            <p className="text-white font-[800]">{timeLeft.hours}</p>
            <span className="text-neutral-500 text-xs">Hours</span>
          </div>
          <div className="counter--box">
            <p className="text-white font-[800]">{timeLeft.minutes}</p>
            <span className="text-neutral-500 text-xs">Mins</span>
          </div>
          <div className="counter--box">
            <p className="text-white font-[800]">{timeLeft.seconds}</p>
            <span className="text-neutral-500 text-xs">Secs</span>
          </div>
        </div>
      ) : (
        <span>Time's up!</span>
      )}
    </div>
  );
};

export default Counter;
