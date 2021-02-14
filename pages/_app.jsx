import "../src/global.css";
import { ThemeProvider } from "../src/theme";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
    const [ theme, setTheme ] = useState('light');
    return (
        <ThemeProvider value={{color: theme, changeColor: setTheme}}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
  
export default MyApp;
