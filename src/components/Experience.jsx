import React from "react";
import { motion } from "framer-motion";

const Experience = () => (
    <section id="experience">
        <div className="container">
            <h2 className="section-title">Experience</h2>
            <motion.div
                className="card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <strong>Product Engineer Intern — Smartail.ai</strong>
                <div className="muted">Aug 2024 – Aug 2025 · DeepGrade.app</div>
                <ul>
                    <li>Built and optimized RESTful APIs using Flask.</li>
                    <li>Developed responsive Angular components.</li>
                    <li>Worked on authentication, dashboards, grading workflows, and reporting.</li>
                    <li>Participated in end‑to‑end SDLC for a live EdTech SaaS product.</li>
                </ul>
            </motion.div>
        </div>
    </section>
);

export default Experience;
