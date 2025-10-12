import React, { use, useEffect } from "react";

export default function Clock({color}) {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          fontSize: "40px",
          marginBottom: "20px",
        }}
      >
        Digital Clock
      </h1>
      <h1
        style={{

          color: color,
          backgroundColor: "black",
          width: "200px",
          margin: "auto",
          padding: "20px",
          borderRadius: "10px",
          fontFamily: "sans-serif",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        {time}
      </h1>
    </div>
  );
}
