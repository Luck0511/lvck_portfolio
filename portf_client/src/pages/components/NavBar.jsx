import {NavLink} from "react-router-dom";
import {routes} from "../../routes/routes.jsx";

export const NavBar = () => {
    const activeLink = ({isActive}) => isActive ? 'navLink active' : 'navLink';
    return (
        <nav className="heroSec_nav">
            <ul>
                {
                    //retrieve navbar buttons dynamically from routes object
                    routes[0].children.map((childRoute) =>{
                        return (
                            <li key={childRoute.path}>
                                <NavLink to={childRoute.path} className={activeLink}>
                                    {childRoute.name}
                                </NavLink>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    )
}