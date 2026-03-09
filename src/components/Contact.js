import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "./Navbar";

// Custom SVG Icons
const PhoneIcon = () => (
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1e1e1e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const MailIcon = () => (
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1e1e1e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const MessageIcon = () => (
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1e1e1e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
);

const contactItems = [
    { label: "Call me", value: "+44 7389 185503", icon: PhoneIcon },
    { label: "E-mail Me", value: "mimorozu@gmail.com", icon: MailIcon },
    { label: "WhatsApp", value: "+44 7389 185503", icon: MessageIcon },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.send(
            'service_ywm1338',
            'template_02nu8im',
            formData,
            '4Ep9AQ7PXiBevhjkB'
        )
            .then(() => {
                setStatus('success');
                setFormData({ from_name: '', from_email: '', message: '' });
            })
            .catch(() => {
                setStatus('error');
            });
    };

    return (
        <>
            <Navbar />
            <h1 className="contact_title">Get in touch!</h1>

            <div className="contact_wrapper">
                {contactItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div key={index} className="contact_tile">
                            <div className="icon">
                                <IconComponent />
                            </div>
                            <div className="flex_cont">
                                <span className="white_text">{item.label}</span>
                                <span className="green_text">{item.value}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="from_name">Name *</label>
                        <input
                            type="text"
                            id="from_name"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="from_email">Email *</label>
                        <input
                            type="email"
                            id="from_email"
                            name="from_email"
                            value={formData.from_email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+44 7000 000000"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message..."
                            rows="6"
                            required
                        />
                    </div>

                    <button type="submit" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && (
                        <p className="form-status success">Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="form-status error">Something went wrong. Please try again.</p>
                    )}
                </form>
            </div>
        </>
    );
}