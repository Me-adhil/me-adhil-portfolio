import React, { useEffect, useState } from "react";
import { Circle } from "rc-progress"; // npm install rc-progress

export default function AnimatedCircle({ precentage, name }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = Math.min(Math.max(precentage, 0), 100); // clamp 0-100
    const speed = 20;

    const interval = setInterval(() => {
      current += 1;
      setPercent(current);
      if (current >= target) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [precentage]);

  return (
    <div className="  flex flex-col items-center scroll-animation">

      <div className="relative w-30 h-30 flex items-center justify-center">
        <Circle
          percent={percent}
          strokeWidth={10}
          strokeLinecap="round" // 👈 rounded edges
          strokeColor={{
            "0%": "#A81C1C",
            "100%": "#C45653",
          }}
          trailColor="#420F0F00" // optional background trail
          trailWidth={10}
          className="absolute w-20 h-20 md:w-30 md:h-30"
        />
        <div className="absolute text-white font-medium text-sm md:text-md lg:text-xl">{percent}%</div>
      </div>
      <h2 className="text-white font-semibold mt-2 ">{name}</h2>
    </div>
  );
}
