"use client";

import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";

function isPrime(num: number) {
  const max = Math.ceil(Math.sqrt(num));

  if (num === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (num % counter === 0) {
      return false;
    }
  }

  return true;
}

function useTime() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return time;
}

const PrimeNumberPage = () => {
  const [selectedNum, setSelectedNum] = useState(100);

  const time = useTime();

  // const allPrimes: number[] = [];
  // for (let counter = 2; counter < selectedNum; counter++) {
  //   if (isPrime(counter)) {
  //     if(counter === 11) console.log('counter', 9)
  //     allPrimes.push(counter);
  //   }
  // }

  const allPrimes = useMemo(() => {
    const primes: number[] = []

    for (let counter = 2; counter < selectedNum; counter++) {
      if (isPrime(counter)) {
        if(counter === 11) console.log('counter', 9)
        primes.push(counter);
      }
    }

    return primes
  }, [selectedNum])

  return (
    <>
      <p className="right-0">{moment(time).format("hh:mm:ss a")}</p>
      <form className="text-center">
        <label htmlFor="num">Your number:</label><br></br>
        <input
          type="number"
          className="border-2"
          value={selectedNum}
          onChange={(event) => {
            // To prevent computers from exploding,
            // we'll max out at 100k
            let num = Math.min(100_000, Number(event.target.value));

            setSelectedNum(num);
          }}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </p>
    </>
  );
};

export default PrimeNumberPage;
