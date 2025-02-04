import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NavBar.css';


export default function NavBar() {
    const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    const [isMenDropdownOpen, setIsMenDropdownOpen] = useState(false);
    const [isWomenDropdownOpen, setIsWomenDropdownOpen] = useState(false);
    const [isCarsDropdownOpen, setIsCarsDropdownOpen] = useState(false);
    const [isHousesDropdownOpen, setIsHousesDropdownOpen] = useState(false);
    const [isFurnitureDropdownOpen, setIsFurnitureDropdownOpen] = useState(false);
    const [isElectronicsDropdownOpen, setIsElectronicsDropdownOpen] = useState(false);
    const [isTextileDropdownOpen, setIsTextileDropdownOpen] = useState(false);
   

    return (
        <div>
            <div className="search-container">
                <h1 className="navbar-brand">
                <img src="../images/ak4logo.jpg" alt="Delala Services Logo" className="logo" />
            
                    AK4 የድላላ SERVICE</h1>
              
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search your Product ..."
                />
                <button className="search-button">
                    <i className="fas fa-search"></i> {/* Font Awesome search icon */}
                </button>

                <button className="register-button">
                    <Link to="/register">REGISTER</Link>
                </button>
                <button className="login-button">
                    <Link to="/login">LOGIN</Link> {/* Use Link with the correct to attribute */}
                </button>
            </div>

            <nav className="navbar">
                <ul className="nav-list">
                    {/* HOME Dropdown */}
                    <li
                        className="menu-item"
                        onMouseEnter={() => setIsHomeDropdownOpen(true)}
                        onMouseLeave={() => setIsHomeDropdownOpen(false)}
                    >
                        <Link to="/">HOME</Link>
                        <span className="dropdown-arrow">▼</span>
                        <ul className={`dropdown-menu ${isHomeDropdownOpen ? 'show' : ''}`}>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            
                        </ul>
                    </li>

                    {/* SHOP Dropdown */}
                    <li
                        className="menu-item"
                        onMouseEnter={() => setIsShopDropdownOpen(true)}
                        onMouseLeave={() => setIsShopDropdownOpen(false)}
                    >
                        <a href="/shop">SHOP</a>
                        <span className="dropdown-arrow">▼</span>
                        <ul className={`dropdown-menu ${isShopDropdownOpen ? 'show' : ''}`}>
                            <li><a href="/about">Latest produt</a></li>
                            <li><a href="/contact">Category list</a></li>
                        </ul>
                    </li>

                    <li className="menu-item"
                    onMouseEnter={()=>    setIsMenDropdownOpen (true)
                
                    }
                    onMouseLeave={()=>setIsMenDropdownOpen(false)}><a href="/men">MEN</a><span className="dropdown-arrow">▼</span>
                       <ul className={`dropdown-menu ${isMenDropdownOpen ? 'show' : ''}`}>
                            <li><a href="/about">Men t-shirt</a></li>
                            <li><a href="/contact">Men jacket</a></li>
                            <li><a href="/about">Men shoes</a></li>
                            <li><a href="/contact">others</a></li>
                        </ul></li>





                    <li className=" menu-item"
                     onMouseEnter={()=>    setIsWomenDropdownOpen (true)
                
                     }
                     onMouseLeave={()=>setIsWomenDropdownOpen(false)}
                    ><a href="/women">WOMEN</a><span className="dropdown-arrow">▼</span>
                    <ul className={`dropdown-menu ${isWomenDropdownOpen ? 'show' : ''}`}>
                            <li><a href="/about">Women dresses</a></li>
                            <li><a href="/contact">Women t-shirt</a></li>
                            <li><a href="/contact">Women jacket</a></li>
                            <li><a href="/about">Women shoes</a></li>
                            <li><a href="/contact">others</a></li>
                        </ul></li>



                   
                    <li
                     onMouseEnter={()=>    setIsCarsDropdownOpen (true)}
                     onMouseLeave={()=>setIsCarsDropdownOpen(false)}

                    ><a href="/cars">CARS</a>
                       <ul className={`dropdown-menu ${isCarsDropdownOpen ? 'show' : ''}`}>
                            <li><a href="/about">Cars for setLastName</a></li>
                            <li><a href="/contact">other Vehicles</a></li>
                          
                        </ul></li>
              







                    <li
                    onMouseEnter={()=>    setIsHousesDropdownOpen (true)}
                    onMouseLeave={()=>setIsHousesDropdownOpen(false)}
                    ><a href="/houses">HOUSES</a>
                    
                    <ul className={`dropdown-menu ${isHousesDropdownOpen ? 'show' : ''}`}>
                            <li><a href="/about">HOuses for rent</a></li>
                            <li><a href="/contact">Houses for sale</a></li>
                          
                        </ul>
                    </li>
                    <li
                    
                    onMouseEnter={()=>    setIsFurnitureDropdownOpen (true)}
                    onMouseLeave={()=>setIsFurnitureDropdownOpen(false)}
                    
                    ><a href="/furniture">FURNITURE</a>
                     <ul className={`dropdown-menu ${isFurnitureDropdownOpen ? 'show' : ''}`}>
                            <li><a href="/about">Bed</a></li>
                            <li><a href="/about">Dining Tables</a></li>
                            <li><a href="/about">Sofa</a></li>
    
                            <li><a href="/contact">Cabinet</a></li>
                            <li><a href="/about">Others</a></li>
                          
                        </ul>
                    
                    </li>
                    <li   
                    
                    onMouseEnter={()=>    setIsElectronicsDropdownOpen (true)}
                    onMouseLeave={()=>setIsElectronicsDropdownOpen(false)}
                    ><a href="/electronics">ELECTRONICS</a>
                    <ul className={`dropdown-menu ${isElectronicsDropdownOpen ? 'show' : ''}`}>
                            <li><a href="/about">Laptops</a></li>
                            <li><a href="/about">Mobiles</a></li>
                            <li><a href="/about">Others</a></li>
                          
                        </ul>
                    </li>
                    <li
                    
                    onMouseEnter={()=>    setIsTextileDropdownOpen (true)}
                    onMouseLeave={()=>setIsTextileDropdownOpen(false)}
                    ><a href="/textile">TEXTILE</a>
                    <ul className={`dropdown-menu ${isTextileDropdownOpen ? 'show' : ''}`}>
                            <li><a href="/about">Blankets</a></li>
                            <li><a href="/about">Bed Covers</a></li>
                            <li><a href="/about">Others</a></li>
                          
                        </ul>
                    </li>
                    <li><a href="/others">OTHERS</a></li>
                </ul>
            </nav>
        </div>
    );
}
