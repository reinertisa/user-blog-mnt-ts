import {NavLink} from "react-router";

export default function Navbar() {

    return (
        <nav className="navbar">
            <h1>The User Blog</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">New Blog</NavLink>
            </div>
        </nav>
    )
}