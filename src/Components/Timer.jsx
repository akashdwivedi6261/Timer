import React, { useEffect } from "react";

export default function Timer({ start, end, setStart }) {
  useEffect(() => {
    const id = setInterval(() => {
      setStart(function (prev) {
        console.log(prev);
        if (prev > end) {
          return prev - 1;
        } else {
          clearInterval(id);
          return prev;
        }
      });
    }, 1000);
    return () => {
      console.log("inside cleanup");
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <h1>Count: {start}</h1>
    </>
  );
}
