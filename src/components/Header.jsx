import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

const Header = () => (
    <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="header-hero"
    >
        <div className="container hero">
            <motion.img
                src={profilePic}
                alt="Logesh Hari G"
                className="hero-photo"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            />
            <motion.div
                className="hero-text"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <span className="badge">Full-Stack Developer</span>
                <h1>Logesh Hari G</h1>
                <p className="subtitle">
                    Building scalable, high-performance web apps using Java Spring Boot,
                    Python Flask, and modern front-end frameworks.
                </p>
                <div className="actions">
                    <a className="btn primary" href="#projects">View Projects</a>
                    <a className="btn secondary" href="#contact">Contact Me</a>
                    <a className="btn secondary" href="/resume.pdf" download="Logesh_Hari_G_Resume.pdf">Download Resume</a>
                </div>
            </motion.div>
        </div>
    </motion.header>
);

export default Header;
