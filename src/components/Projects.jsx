import React from "react";
import { motion } from "framer-motion";

const Projects = () => (
    <section id="projects">
        <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="grid cols-2">
                <motion.div
                    className="card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03, boxShadow: "0 16px 35px rgba(0,0,0,.12)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <strong>Employee Management System</strong>
                    <p className="muted">Java Spring Boot · React.js · MySQL</p>
                    <p>
                        Full‑stack application with CRUD operations, REST APIs, responsive UI,
                        employee search/filter, and form validation.
                    </p>
                    <div className="actions">
                        <a
                            className="btn secondary"
                            href="https://github.com/Logesh2003"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Code
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default Projects;
