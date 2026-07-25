import './assets/styleSheets/App.css'
import {Outlet} from "react-router";
import {NavLink} from "react-router-dom";
import {ProjectsCmp} from "#pages/components/Projects.cmp.jsx";
import {NavBar} from "#pages/components/NavBar.jsx";

function App() {
    return (
        <>
            <div className="heroSec">
                <NavLink to="/" className="heroSec_logo">
                    <img src="/logo/LogoTitle.svg" alt="logo"/>
                </NavLink>
                <NavBar />
            </div>
            <Outlet className="outletChild"/>
        </>
    )
}

export default App
