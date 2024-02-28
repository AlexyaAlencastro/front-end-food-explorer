import { useState, useEffect } from 'react';

export const themeConfig = () => {
    const [theme, setTheme] = useState("themeDark");

    const setMode = mode => {
        window.localStorage.setItem("@foodexplorer:theme", mode);
        setTheme(mode);
    };

    const toggleTheme = () => {
        theme === "themeDark" ? setMode("themeLight") : setMode("themeDark");
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("@foodexplorer:theme");
        localTheme ? setTheme(localTheme) : setMode("themeDark");
    }, []);

    return { theme, toggleTheme };
};