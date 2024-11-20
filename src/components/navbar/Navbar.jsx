
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <nav className='main_nav'>

        <div className="container">
            <div className="menu_row">
                <div className="menu_logo">
                    
                    <Link to={"/"} ><img src="image/Logo.png" alt="logo" /></Link>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>Features</Link></li>
                        <li><Link>Pricing</Link></li>
                        <li><Link>Testimonials</Link></li>
                        <li><Link>Help</Link></li>
                    </ul>
                </div>
                <div className="menu_button">
                    <Link className='sign_in' to={"#"}>Sign in</Link>
                    <Link className='sign_up' to={"#"}>Sign up</Link>
                </div>
            </div>
        </div>

    </nav>
        
    </>
  )
}

export default Navbar