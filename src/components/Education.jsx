import React from "react";
import { motion } from "framer-motion";

const Education = () => (
    <section id="education">
        <div className="container">
            <h2 className="section-title">Education</h2>
            <motion.div
                className="card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <strong>B.E. Computer Science and Engineering</strong>
                <div className="muted">
                    St. Joseph’s College of Engineering and Technology · 2020–2024
                </div>
            </motion.div>
        </div>
    </section>
);

export default Education;
