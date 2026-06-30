import "./Footer.css";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>☕ चहावाले मामा</h2>

          <p>
            २०१६ पासून उमरखेडमध्ये
            गरमागरम चहा आणि कॉफी
            घरपोच सेवा.
          </p>

        </div>

        <div className="footer-info">

          <div className="footer-item">
            <FaPhoneAlt />
            <a href="tel:9545187044">
              9545187044
            </a>
          </div>

          <div className="footer-item">
            <FaMapMarkerAlt />
            <span>उमरखेड, जि. यवतमाळ</span>
          </div>

          <div className="footer-item">
            <FaClock />
            <span>दररोज सेवा उपलब्ध</span>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 चहावाले मामा | Made with ❤️ in Umarkhed
      </div>

    </footer>
  );
}

export default Footer;