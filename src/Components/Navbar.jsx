import style from './Navbar.module.css'
import center from '../App.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.navbarWrapper}>
            <div className={center.textCenter}>
                Navbar
            </div>
            <div className={style.textNavbar}>
                <NavLink to={"/profile"}>Profile</NavLink>
            </div>
            <div className={style.textNavbar}>
                <NavLink to={"/dialogs"}>Dialogs</NavLink>
            </div>
            <div className={style.textNavbar}>
                <NavLink to={"/feed"}>Feed</NavLink>
            </div>
        </div>
    );
}

export default Navbar;