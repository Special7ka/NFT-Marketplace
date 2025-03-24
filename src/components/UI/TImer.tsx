import { useEffect, useState } from "react";

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => String(time).padStart(2, "0");

  const hours = formatTime(Math.floor(timeLeft / 3600));
  const minutes = formatTime(Math.floor((timeLeft % 3600) / 60));
  const seconds = formatTime(timeLeft % 60);

  return (
    <div className="bg-[#3B3B3B80] max-w-[295px] max-h-[144px] h-full rounded-[20px] p-[30px]">
      <p className="text-xs font-SpaceMono">Auction ends in:</p>
      <div className="flex justify-between  text-4xl">
        <div className="flex flex-col gap-[5px]">
          <span className="font-bold">{hours}</span>
          <p className="text-xs font-normal font-SpaceMono">Hours</p>
        </div>
        <span>:</span>
        <div className="flex flex-col gap-[5px]">
          <span className="font-bold">{minutes}</span>
          <p className="text-xs font-normal font-SpaceMono">Minutes</p>
        </div>
        <span>:</span>
        <div className="flex flex-col gap-[5px]">
          <span className="font-bold">{seconds}</span>
          <p className="text-xs font-normal font-SpaceMono">Seconds</p>
        </div>
      </div>
    </div>
  );
};
