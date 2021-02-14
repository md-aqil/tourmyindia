import header from "./header.module.css";
const Layout = (props)=> {
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
                        </ul>
                    </nav>
                </header>
            </div>
            {props.children}
        </div>
    )
}
export default Layout;
