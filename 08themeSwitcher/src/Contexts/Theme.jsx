import React, { useContext } from "react";

export const ThemeContext = React.createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export function Theme() {
     return useContext(ThemeContext)
}