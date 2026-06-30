import "./HowItWorks.css";
import { FaPhoneAlt, FaMugHot, FaMotorcycle } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: FaPhoneAlt,
    title: "फोन करा",
    description: "9545187044 वर कॉल करून तुमची ऑर्डर द्या.",
  },
  {
    icon: FaMugHot,
    title: "चहा तयार होईल",
    description: "तुमच्यासाठी ताजा चहा किंवा कॉफी लगेच तयार केली जाईल.",
  },
  {
    icon: FaMotorcycle,
    title: "घरपोच सेवा",
    description: "उमरखेड शहरात तुमच्या सांगितलेल्या ठिकाणी गरमागरम डिलिव्हरी.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ऑर्डर करणं इतकं सोपं!
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        फक्त एक फोन करा आणि गरमागरम चहा तुमच्या दारात मिळवा.
      </motion.p>

      <div className="steps">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
            >
              <Icon className="step-icon" />

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </motion.div>
          );
        })}

      </div>

    </section>
  );
}

export default HowItWorks;