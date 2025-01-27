import React, { useState, useEffect } from "react";
// Custom Hook
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
}
// StatusBar Component
export function Statusbar() {
  const isOnline = useOnlineStatus();
  return (
    <div
      style={{
        backgroundColor: isOnline ? "green" : "red",
        color: "white",
        padding: "1em",
        textAlign: "center",
      }}
    >
      <h1>Status: {isOnline ? "Online" : "Offline"}</h1>
    </div>
  );
}