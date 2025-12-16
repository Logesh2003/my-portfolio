import React from "react";
import { motion } from "framer-motion";

const Skills = () => (
    <section id="skills">
        <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="grid cols-3">
                <motion.div
                    className="card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <strong>Frontend</strong>
                    <div>
                        <span className="pill">Angular</span>
                        <span className="pill">React.js</span>
                        <span className="pill">HTML5</span>
                        <span className="pill">CSS3</span>
                        <span className="pill">Bootstrap</span>
                    </div>
                </motion.div>

                <motion.div
                    className="card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <strong>Backend</strong>
                    <div>
                        <span className="pill">Java</span>
                        <span className="pill">Spring Boot</span>
                        <span className="pill">Python Flask</span>
                        <span className="pill">REST APIs</span>
                    </div>
                </motion.div>

                <motion.div
                    className="card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <strong>Database & Tools</strong>
                    <div>
                        <span className="pill">MySQL</span>
                        <span className="pill">SQL</span>
                        <span className="pill">Git</span>
                        <span className="pill">GitHub</span>
                        <span className="pill">Postman</span>
                        <span className="pill">Swagger</span>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default Skills;
