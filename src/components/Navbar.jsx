import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <div className="navDiv">
                <h1>Philosophy Book</h1>

                <nav>
                    <NavLink to="/" className="navItem" >Home</NavLink>
                    <NavLink to="philosopher" className="navItem" >Philosopher</NavLink>
                </nav>
            </div>
        </header>
    )
}