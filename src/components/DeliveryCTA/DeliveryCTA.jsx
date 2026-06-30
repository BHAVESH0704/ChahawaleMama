import "./DeliveryCTA.css";
import {
  FaPhoneAlt,
  FaMotorcycle,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

function DeliveryCTA() {
  return (
    <section id="contact" className="delivery">

      <div className="delivery-content">

        <motion.span
          className="delivery-badge"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          🚚 उमरखेडमध्ये होम डिलिव्हरी
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          चहा हवा आहे?
          <br />
          फक्त एक फोन करा!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          गरमागरम चहा आणि कॉफी तुमच्या घरी,
          ऑफिसमध्ये किंवा दुकानात पोहोचवली जाईल.
        </motion.p>

        <div className="delivery-details">

          {[
            {
              icon: FaMapMarkerAlt,
              text: "उमरखेड, जि. यवतमाळ",
            },
            {
              icon: FaMotorcycle,
              text: "होम डिलिव्हरी उपलब्ध",
            },
            {
              icon: FaClock,
              text: "२०१६ पासून सेवा",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="detail"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.15,
                }}
              >
                <Icon />
                <span>{item.text}</span>
              </motion.div>
            );
          })}

        </div>

        <motion.a
          href="tel:9545187044"
          className="call-button"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.8,
          }}
          whileHover={{
            scale: 1.05,
            y: -4,
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          <FaPhoneAlt />
          <span>9545187044</span>
        </motion.a>

      </div>

    </section>
  );
}

export default DeliveryCTA;