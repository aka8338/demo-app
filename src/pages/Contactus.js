

function ContactUs() {
    return (
        <div className="contact-container">
            <div className="contact-form-section">
                <h2 className="form-header">Tell Us What You FEEL.</h2>
                <div className="icon-placeholder">
                    <div className="green-square"></div>
                </div>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name <span className="required">*</span></label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email <span className="required">*</span></label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
            <div className="contact-info-section">
                <h2 className="info-header">Contact Us</h2>
                <p>
                We're here to help! Whether you have a question about our services, need assistance with a transaction, 
                or just want to share your thoughts, we’d love to hear from you. Feel free to reach out, and our team will get back to you as soon as possible. 
                Your feedback is essential in helping us create the best experience for you. Let's make your journey smoother together!
                </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <strong>📍 Address</strong>
                        <p>Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="contact-detail">
                        <strong>📞 Phone</strong>
                        <p>Mobile: +251-949-61-83-38</p>
                        <p>OR: +251-964-84-66-09</p>
                    </div>
                    <div className="contact-detail">
                        <strong>📧 Email</strong>
                        <p>aklilubeyero@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;