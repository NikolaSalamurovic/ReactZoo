import { Link, Outlet } from "react-router-dom"
import '.././App.css'

export const Layout= () => {
    return(
        <>
            <header className="headerContainer">
                <Link to="/" className="headerLink">Startsida</Link>
                <Link to="/zoo" className="headerLink">ZooList</Link>
            </header>

            <body>
                <Outlet></Outlet>
            </body>
        </>
    )
}