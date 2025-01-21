import React, { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState<String>("");

  useEffect(() => {
    const clockSource = new EventSource("http://localhost:5004/time");
    clockSource.onmessage = (event) => {
      setTime(event.data);
    };

    clockSource.onerror = (error) => {
      console.log("Error while SSE clock:", error);
    };

    return () => {
      clockSource.close();
    };
  }, []);
  return ( 
    <div>
        <h1>Current Time:</h1>
        <p>{time}</p>
    </div>
  );
};
