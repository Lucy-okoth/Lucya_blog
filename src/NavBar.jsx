import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar"> 
        <h1>Lucya Blog</h1>
        <div className="links"> 
            <Link to="/">Home</Link>
            <Link to="/">Create</Link>
            <Link to="/">Github</Link>
            <Link to="/">Linkein</Link>
            <Link to="/">Instagram</Link>
            {/* <Link to="/create">New Blog</Link> */}
        </div>
        </nav>
     );
}
 
export default Navbar;