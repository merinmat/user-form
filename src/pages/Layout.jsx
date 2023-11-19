import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <nav className="p-4 bg-teal-400 text-white text-lg
            fixed top-0 w-screen">
                <ul className="flex justify-evenly">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout