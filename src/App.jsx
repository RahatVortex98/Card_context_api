import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/theme';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightMode = () => {
    setThemeMode('light');
  };

  const darkMode = () => {
    setThemeMode('dark');
  };

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="flex flex-wrap min-h-screen items-center justify-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;