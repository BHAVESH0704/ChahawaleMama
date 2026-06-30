import "./Hero.css";
import heroImage from "../../assets/images/hero.webp";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaMotorcycle,
  FaMapMarkerAlt,
} from "react-icons/fa";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};

function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Navbar />

      <div className="hero-overlay">
        <div className="hero-content">

          <motion.p
            className="hero-badge"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Since 2016 • उमरखेड
          </motion.p>

          <motion.div
            className="hero-accent"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          />

          <motion.h1
            className="hero-title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            चहावाले
            <span>मामा</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            गरमागरम चहा... आता एका फोनवर!
          </motion.p>

          <motion.p
            className="hero-description"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
          >
            उमरखेडमध्ये गरमागरम चहा आणि कॉफी
            <br />
            एका फोनवर तुमच्या दारापर्यंत.
            <br />
            <br />
            विश्वास, गुणवत्ता आणि आपुलकीची सेवा
            <br />
            २०१६ पासून.
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
          >
            <a href="#menu" className="primary-btn">
              आमचा मेनू
            </a>

            <a href="tel:9545187044" className="secondary-btn">
              📞 आता कॉल करा
            </a>
          </motion.div>

          <motion.div
            className="hero-features"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <div className="hero-feature">
              <FaCheckCircle />
              <span>२०१६ पासून</span>
            </div>

            <div className="hero-feature">
              <FaMotorcycle />
              <span>होम डिलिव्हरी</span>
            </div>

            <div className="hero-feature">
              <FaMapMarkerAlt />
              <span>उमरखेड</span>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

export default Hero;