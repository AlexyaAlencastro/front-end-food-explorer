import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes } from './routes';
import { AuthProvider } from './hooks/auth';

import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import { ThemeSlider } from './components/ThemeSlider';
import { themeLight, themeDark } from './styles/theme';
import { themeConfig } from './styles/themeConfig';

function App() {
    const { theme, toggleTheme } = themeConfig();
    const themeMode = theme === "themeLight" ? themeLight : themeDark;

    return (
        <React.StrictMode>
            <ThemeProvider theme={themeMode}>
                <GlobalStyles />
                <AuthProvider>
                    <Routes />
                    <ThemeSlider theme={theme} toggleTheme={toggleTheme} />
                </AuthProvider>
            </ThemeProvider>
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);