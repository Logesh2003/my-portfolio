import React from "react";
import { motion } from "framer-motion";

const About = () => (
    <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
        <div className="container">
            <h2 className="section-title">About</h2>
            <p className="muted">
                Dedicated Full‑Stack Developer with hands‑on experience building RESTful APIs,
                integrating databases, and creating responsive user interfaces.
                Experienced across the SDLC and passionate about clean code and continuous learning.
            </p>
        </div>
    </motion.section>
);

export default About;
