import { useTheme } from "../../theme";
import header from "./header.module.css";
const Layout = (props)=> {
    const colors = {
        'light': 'Dark',
        'dark': 'Light'
    }
    const theme = useTheme();
    const handleChangeTheme = () => {
        theme.changeColor(theme.color === 'dark' ? 'light' : 'dark')
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark')
        } else {
            document.body.classList.add('dark')
        }
    }
    return (
        <div>
            <div className="container">
                <header className={header.siteHeader}>
                    <a href="" className="siteLogo">
                        <img  src="../../assets/logo.png" alt=""/>
                    </a>
                    <nav className={header.navBar}>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Destinations</a></li>
                            <li><a href="">Holiday Ideas</a></li>
                            <li><a href="">Packages</a></li>
                            <li><button className={header.changeColor} onClick={handleChangeTheme}>{ colors[theme.color] }</button></li>
                        </ul>
                    </nav>
                 
                </header>
            </div>
            {props.children}
        </div>
    )
}
export default Layout;
