import "./WhyChoose.css";
import {
  FaMotorcycle,
  FaMugHot,
  FaClock,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: FaPhoneAlt,
    title: "एका फोनवर ऑर्डर",
    description: "9545187044 वर कॉल करा आणि तुमची ऑर्डर नोंदवा.",
  },
  {
    icon: FaMotorcycle,
    title: "होम डिलिव्हरी",
    description: "उमरखेड शहरात तुमच्या सांगितलेल्या ठिकाणी चहा घरपोच.",
  },
  {
    icon: FaMugHot,
    title: "नेहमी ताजा चहा",
    description: "प्रत्येक ऑर्डरनंतर ताजा चहा किंवा कॉफी तयार केली जाते.",
  },
  {
    icon: FaClock,
    title: "२०१६ पासून सेवा",
    description: "अनेक वर्षांपासून ग्राहकांचा विश्वास आणि सातत्यपूर्ण सेवा.",
  },
];

function WhyChoose() {
  return (
    <section id="why" className="why">

      <motion.div
        className="why-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>आमची खासियत</h2>

        <p>
          २०१६ पासून उमरखेडमध्ये विश्वासार्ह चहा आणि होम डिलिव्हरी सेवा.
        </p>
      </motion.div>

      <div className="why-grid">

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={index}
              className="why-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.18,
              }}
            >
              <Icon className="why-icon" />

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}

export default WhyChoose;