import { Link } from "react-router-dom";


const Navbar = () => {
    return (

    
    <nav className="navbar">
      <h1>The Flow Blog</h1>
    
    <Link to="/">Home</Link>

    <br />

    <Link to= "/create">Create</Link>

        </nav>
      );
}
 
export default Navbar;