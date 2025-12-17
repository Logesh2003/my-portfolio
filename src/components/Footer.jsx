import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Footer = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);
        setStatus("");

        const payload = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            message: formData.message.trim(),
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                payload,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" });
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                setStatus("Failed to send message. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };


    return (
        <motion.footer
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container contact">
                <h2 className="section-title">Contact</h2>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px" }}>
                    <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                    <textarea name="message" placeholder="Message" required value={formData.message} onChange={handleChange} />
                    <button className="btn primary" type="submit" disabled={loading}>{loading ? "Sending..." : "Send"}</button>
                </form>
                {status && <p style={{ marginTop: "8px" }}>{status}</p>}
                <div
                    style={{
                        marginTop: "24px",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "12px",
                        alignItems: "center",
                    }}
                >
                    <a href="mailto:gm.logeshhari2003@gmail.com">gm.logeshhari2003@gmail.com</a>
                    <a href="https://github.com/Logesh2003" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/logesh-hari" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
