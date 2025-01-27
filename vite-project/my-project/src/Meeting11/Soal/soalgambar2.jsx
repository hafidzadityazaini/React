import { useState } from "react";
export function useTaskStatus() {
    const [isTaskCompleted, setIsTaskCompleted] = useState(false); // Default: false
    function toggleTaskStatus() {
        setIsTaskCompleted((prevStatus) => !prevStatus);
    }
    return { isTaskCompleted, toggleTaskStatus };
}