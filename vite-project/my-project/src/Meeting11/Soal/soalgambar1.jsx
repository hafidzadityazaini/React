import { useState, useEffect } from "react";
export function useTheme() {
    const [theme, setTheme] = useState("light"); // Default theme: light
    // Effect untuk mencetak tema ke konsol setiap kali berubah
    useEffect(() => {
        console.log(`Current theme: ${theme}`);
    }, [theme]);
    // Fungsi untuk mengganti tema
    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    return { theme, toggleTheme };
}