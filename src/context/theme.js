import React from "react";
import { useContext,createContext } from "react";


const ThemeContext = createContext({
    themeMode:"light",
    darkMode : ()=>{},
    lightMode : ()=>{},
})

export default ThemeContext

// Export the context Provider (used to wrap components that need access to this context)
export const ThemeProvider = ThemeContext.Provider

// Custom hook to access the ThemeContext values
export const useTheme = () =>{
    return useContext(ThemeContext)
}