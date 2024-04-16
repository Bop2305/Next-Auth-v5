"use client";

import moment from "moment";
import { useEffect, useRef, useState } from "react";

const useInterval = (callback: Function, delay?: number | null) => {
  const savedCallback = useRef<Function>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
};

const RenderingTimeInfo = () => {
  const [msNow, setMsNow] = useState<number>(0);

  // update every second
  useInterval(() => {
    setMsNow(Date.now());
  }, 1000);

  return <div>{msNow !== 0 && moment(msNow).format()}</div>;
};

export default RenderingTimeInfo;
