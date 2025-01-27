import React from "react";
import { useTaskStatus } from "./soalgambar2";
export default function Negro() {
    const { isTaskCompleted, toggleTaskStatus } = useTaskStatus();
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: isTaskCompleted ? "#d4edda" : "#f8d7da",
                color: isTaskCompleted ? "#155724" : "#721c24",
                padding: "20px",
                textAlign: "center",
            }}
        >
            <h1>
                {isTaskCompleted ? "✔ Task Completed" : "✘ Task Not Completed"}
            </h1>
            <button
                onClick={toggleTaskStatus}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: isTaskCompleted ? "#28a745" : "#dc3545",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
            >
                Toggle Task
            </button>
        </div>
    );
}