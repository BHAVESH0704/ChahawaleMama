import "./Menu.css";
import { FaMugHot, FaCoffee } from "react-icons/fa";
import { motion } from "framer-motion";

const menuItems = [
  {
    icon: FaMugHot,
    title: "चहा",
    description: "गरमागरम, ताजा आणि अस्सल चव असलेला आमचा खास चहा.",
  },
  {
    icon: FaMugHot,
    title: "ब्लॅक टी",
    description: "उपलब्ध असल्यास ताजी ब्लॅक टी दिली जाईल.",
  },
  {
    icon: FaMugHot,
    title: "लेमन टी",
    description: "उपलब्ध असल्यास ताजी लेमन टी मिळेल.",
  },
  {
    icon: FaCoffee,
    title: "कॉफी",
    description: "उपलब्ध असल्यास गरमागरम कॉफी तयार करून दिली जाईल.",
  },
];

function Menu() {
  return (
    <section id="menu" className="menu">

      <motion.div
        className="menu-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>आमचा मेनू</span>

        <h2>नेहमी ताजं, नेहमी गरम</h2>

        <p>
          प्रत्येक कप ताजा बनवला जातो. तुमच्या आवडीचा चहा किंवा कॉफी निवडा.
        </p>
      </motion.div>

      <div className="menu-grid">

        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              className="menu-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.18,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
            >
              <Icon className="menu-icon" />

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </motion.div>
          );
        })}

      </div>

    </section>
  );
}

export default Menu;