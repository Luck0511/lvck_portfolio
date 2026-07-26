import './assets/styleSheets/App.scss'
import {Outlet, NavLink} from "react-router";
import {NavBar} from "#pages/components/NavBar.jsx";
import {Starfield} from "#pages/components/Starfield.jsx";

function App() {
    return (
        <>
            <Starfield/>
            <div className="heroSec">
                <NavLink to="/" className="heroSec_logo">
                    <div className="orbit-mark">
                        <div className="orbit-ring">
                            <div className="orbit-dot"/>
                        </div>
                        <div className="orbit-core"/>
                    </div>
                    <span className="wordmark">lvck<span className="accent-dot">.</span>dev</span>
                </NavLink>
                <NavBar/>
            </div>
            <Outlet className="outletChild"/>
            <footer role="contentinfo" id="contact">
                <div className="footerInfo">
                    <section id="infoMain">
                        <h3>Luca Terranova</h3>
                        <h4><small>Junior Software Architect</small></h4>
                    </section>
                    <section>
                        <h4>Contact:</h4>
                        <a href="mailto:lucaterra.dev@gmail.com">lucaterra.dev@gmail.com</a>
                    </section>
                    <section>
                        <h4>Github:</h4>
                        <a href="https://github.com/Luck0511">Luck0511</a>
                    </section>
                    <section>
                        <h4>LinkedIn:</h4>
                        <a href="https://www.linkedin.com/in/itlvck0511">Luca Terranova</a>
                    </section>
                </div>
                <section id="copyrightMark">
                    <small>©2026 Luca Terranova</small>
                </section>
            </footer>
        </>
    )
}

export default App
