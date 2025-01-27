import React from "react";
import { useOnlineStatus } from "./tessoal";
export function SaveButton() {
    const isOnline = useOnlineStatus();
    function handleSaveClick() {
        console.log("Save button clicked!");
    }
    return (
        <button
            onClick={handleSaveClick}
            disabled={!isOnline}
            style={{
                padding: "10px 20px",
                fontSize: "16px",
                cursor: isOnline ? "pointer" : "not-allowed",
                backgroundColor: isOnline ? "blue" : "gray",
                color: "white",
                border: "none",
                borderRadius: "5px",
                marginTop: "20px",
                marginLeft: "20px",
            }}
        >
            {isOnline ? "Save progress" : "Reconnecting..."}
        </button>
    );
}