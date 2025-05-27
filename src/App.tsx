import {Outlet} from "react-router";
import Navbar from "./components/Navbar.tsx";

export default function App() {
    return (
        <div>
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}
