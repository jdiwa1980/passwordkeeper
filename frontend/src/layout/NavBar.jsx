import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import {
  FaPlus,
  FaSearch,
  FaList,
  FaStar,
  FaLock
} from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import Button from "../components/Button";
import { login } from "../api/authApi";

const NavBar = ({ onContactClick, onMobileClick, onSearchClick, onAllClick, onFavoriteClick, onLockClick, onLogOut, username }) => {
        
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const currentYear = new Date().getFullYear();

    const socials = [
        {
            href: "https://web.facebook.com/jeff.diwa.2024/",
            icon: "nes-icon facebook"
        },
        {
            href: "https://www.linkedin.com/in/neil-jeffrey-diwa-502a85134/",
            icon: "nes-icon linkedin"
        },
        {
            href: "https://github.com/jdiwa1980",
            icon: "nes-icon github"
        },
        {
            href: "https://www.reddit.com/user/Full_Confection4156/",
            icon: "nes-icon reddit"
        },
    ]

    const options = [
        {
            label:"Add ",
            icon: <FaPlus className="menu-icon add"/>,
            onClick: onContactClick
        },
        {
            label:"Search",
            icon: <FaSearch className="menu-icon search"/>,
            onClick: onSearchClick
        },
        {
            label:"All",
            icon: <FaList className="menu-icon records"/>,
            onClick:onAllClick
        },
        {
            label:"Favorites",
            icon: <i class="nes-icon is-small star"></i>,
            onClick:onFavoriteClick
        },
        {
            label:"Lock",
            icon: <FaLock className="menu-icon lock"/>,
            onClick:onLockClick
        },

    ]

    return ( 
        <header className="nav-bar">
            {/* Mobile Menu Button  */}
                {isMobileMenuOpen && (
                    <div
                    className="mobile-overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
                <button 
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    className="mobile-button"
                >
                    {isMobileMenuOpen ? <RxCross2 size={30} style={{ color: "white" }}/> : <RxHamburgerMenu size={30} />}
                </button>
                <div className="mobile-logo">
                    <i><TbLockPassword size={35}/></i>
                    <h1>password keeper</h1>
                </div>
                
            <div className="container">
                <div className="nav-brand">
                    <a href="https://neildiwa.vercel.app/">
                        <h1>
                            
                            <i className="nes-mario brand-logo"></i>
                             Password Keeper
                        </h1>
                    </a>
                    <p>© {currentYear} neildiwa.</p>
                </div>
                <div className="nav-options">
                    <ul className="nav-list">
                        {options.map((item, idx) => (
                            <li key={idx}>
                                <i>{item.icon}</i>
                                <a
                                key={idx}
                                onClick={item.onClick}
                            >   
                                {item.label}
                            </a>
                            
                            </li>
                        ))}
                    </ul>
                </div>                
                <div className="social-buttons">
                    <p>Share on SNS</p>
                    <div className="share">
                        {socials.map((item, idx) => (
                            <a href={item.href}
                                key={idx}
                                target="_blank"
                                rel="noopener noreferrer"
                            
                            >
                                <i className={item.icon}></i>
                            </a>    
                        ))}
                    </div>
                    <div className="user-info">
                        Welcome, <strong>{username}</strong>
                    </div>
                    <button className="nes-btn is-error"
                            onClick={onLogOut}
                    
                    >
                        Logout
                    </button>
                    {/* <Button 
                       className="nes-btn is-primary"
                       content="ADD"
                       onClick={onContactClick}
                    /> */}
                </div>
            </div>
            {/* mobile menu links */}
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-brand">
                        <h2>
                            <i className="nes-mario brand-logo"></i>
                            <p>Password Keeper</p>
                        </h2>
                    </div>
                    <div className="mobile-options">
                        {options.map((item, idx) => (
                            <li>
                                <a
                                key={idx}
                                onClick={item.onClick}
                                >   
                                    <i>{item.icon} </i>
                                    {item.label}
                            </a>
                            </li>
                            
                        ))}
                    </div>
                    <div className="user-info">
                        Welcome, <strong>{username}</strong>
                    </div>
                    <button className="nes-btn is-error"
                            onClick={onLogOut}
                    >
                        Logout
                    </button>

                </div>

            )}
            
        </header>
     );
}
 
export default NavBar;