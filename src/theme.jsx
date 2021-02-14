import { createContext, useContext } from "react";

const ThemeContext = createContext({
    color: 'dark',
    changeColor() {}
});

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ThemeContext.Provider;
