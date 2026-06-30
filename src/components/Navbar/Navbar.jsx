import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <a href="#home">
            <h2>☕ चहावाले मामा</h2>
          </a>
        </div>

        <ul className="nav-links">
          <li><a href="#home">मुख्यपृष्ठ</a></li>
          <li><a href="#how-it-works">सेवा</a></li>
          <li><a href="#menu">मेनू</a></li>
          <li><a href="#contact">संपर्क</a></li>
        </ul>

        <a href="tel:9545187044" className="visit-btn">
          📞 कॉल करा
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </nav>

      <div
        className={`mobile-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      />

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={closeMenu}
        >
          <FaTimes />
        </button>

        <a href="#home" onClick={closeMenu}>मुख्यपृष्ठ</a>
        <a href="#how-it-works" onClick={closeMenu}>सेवा</a>
        <a href="#menu" onClick={closeMenu}>मेनू</a>
        <a href="#contact" onClick={closeMenu}>संपर्क</a>

        <a
          href="tel:9545187044"
          className="mobile-call"
          onClick={closeMenu}
        >
          📞 9545187044
        </a>
      </div>
    </>
  );
}

export default Navbar;