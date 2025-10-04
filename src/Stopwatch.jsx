import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const watchRef = useRef(null);
  const [time, setTime] = useState(0);

  function handleStart() {
    if (!watchRef.current) {
      watchRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  }

  function handleStop() {
    clearInterval(watchRef.current);
    watchRef.current = null;
  }

  function handleReset() {
    handleStop();
    setTime(0);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #dbeafe, #ede9fe, #fce7f3)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: "300px",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
          ⏱ Stopwatch
        </h1>
        <p style={{ fontSize: "40px", fontWeight: "bold", color: "#7e22ce", marginBottom: "30px" }}>
          {time}s
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            onClick={handleStart}
            style={{
              backgroundColor: "#22c55e",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Start
          </button>
          <button
            onClick={handleStop}
            style={{
              backgroundColor: "#ef4444",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Stop
          </button>
          <button
            onClick={handleReset}
            style={{
              backgroundColor: "#facc15",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
