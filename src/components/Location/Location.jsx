import "./Location.css";
import {
  FaMapMarkerAlt,
  FaMotorcycle,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Location() {
  return (
    <section id="location" className="location">

      <motion.div
        className="location-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <span className="section-tag">
          📍 आमचे ठिकाण
        </span>

        <h2>
          उमरखेडमध्ये
          <br />
          आम्ही तुमच्या सेवेत.
        </h2>

        <p>
          २०१६ पासून उमरखेडमध्ये गरमागरम चहा आणि कॉफीची
          विश्वासार्ह होम डिलिव्हरी सेवा देत आहोत.
          फक्त एक फोन करा आणि गरमागरम चहा तुमच्या दारात.
        </p>

        <div className="location-info">

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>उमरखेड, जि. यवतमाळ</span>
          </div>

          <div className="info-item">
            <FaMotorcycle />
            <span>होम डिलिव्हरी उपलब्ध</span>
          </div>

          <div className="info-item">
            <FaPhoneAlt />
            <a href="tel:9545187044">
              9545187044
            </a>
          </div>

        </div>

        <div className="location-buttons">

          <a
            href="https://maps.app.goo.gl/Eop7wanMhtNm6ZzW9?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
          >
            📍 Google Maps
          </a>

          <a
            href="tel:9545187044"
            className="call-btn"
          >
          
          </a>

        </div>

      </motion.div>

      <motion.div
        className="location-right"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <iframe
          title="Chahavale Mama Location"
          src="https://www.google.com/maps/embed?pb=!4v1782833234672!6m8!1m7!1syUh8Xgn1crC37TbPvK_YoA!2m2!1d19.6010675799616!2d77.69307740613172!3f170.10534863969508!4f-14.204576656509786!5f0.7820865974627469"
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />

      </motion.div>

    </section>
  );
}

export default Location;