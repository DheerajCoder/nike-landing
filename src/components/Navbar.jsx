const Navbar =() =>
{
    return(
        <>
        <nav className="container">
            <div className="nav-logo">
                <img src="\images\brand_logo.png" alt="" />
            </div>
                <ul className="menu-items">
                    <li><a href="">MENU</a></li>
                    <li><a href="">LOCATION</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">CONTACT</a></li>
                    

                </ul>

                <div className="button">
                    <button>Login</button>
                </div>

                
            
        </nav>
        
        </>
    )
}

export default Navbar;
