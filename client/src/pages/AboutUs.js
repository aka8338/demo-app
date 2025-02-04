import './Landing.css';

export default function AboutUs() {
  return (
  <>
<div className="about-us-container">

            <section className="about-header">
                <h1 className="about-title">About AK4 Delala</h1>
                <p className="about-tagline">Connecting Buyers and Sellers Seamlessly</p>
            </section>

            <section className="about-content">
                <h2 className="section-title">Who We Are</h2>
                <p>
                    AK4 Delala is a trusted online platform that serves as a middleman between buyers and sellers. 
                    Our mission is to simplify transactions by providing a seamless and secure environment for 
                    connecting individuals and businesses who want to buy and sell goods or services.
                </p>

                <h2 className="section-title">What We Do</h2>
                <p>
                    At AK4 Delala, we take the hassle out of finding trustworthy buyers or sellers. Whether you're 
                    an individual or a business, our platform makes it easy to list products, find deals, and complete 
                    secure transactions. We manage the communication and ensure the legitimacy of both parties, offering 
                    peace of mind throughout the process.
                </p>

                <h2 className="section-title">Why Choose Us?</h2>
                <ul className="about-list">
                    <li>Easy-to-use platform for buyers and sellers</li>
                    <li>Secure transactions with trusted middleman services</li>
                    <li>Extensive network of buyers and sellers</li>
                    <li>24/7 customer support for all your needs</li>
                    <li>Transparent and fair commission-based system</li>
                </ul>

                <h2 className="section-title">Our Vision</h2>
                <p>
                    We believe in creating a future where buyers and sellers can connect and trade with confidence. 
                    AK4 Delala aims to be the go-to platform for individuals and businesses looking to make transactions 
                    without the worry of fraud or unreliable parties.
                </p>

                <h2 className="section-title">Get in Touch</h2>
                <p>
                    If you want to learn more about our services or have any questions, feel free to <a href="/contact">contact us</a>. 
                    We're here to help!
                </p>
            </section>
        </div>








{/* footer */}
<footer className="footer">
      <div className="footer-container">
        {/* Company Information */}
        <div className="footer-column">
          <img src="your-logo.png" alt="Netsa-Delala Logo" className="footer-logo" />
          <p>
            Netsadelala is a website free from brokers. In this website, anyone
            can advertise their product or service for free! Register and try it now.
          </p>
          <p><strong>ADDRESS:</strong> Ethiopia, Tigray, Mekelle</p>
          <p><strong>PHONE:</strong> +251-978-901-281</p>
          <p><strong>OR:</strong> +251-975-427-147</p>
          <p><strong>EMAIL:</strong> netsadelala365@gmail.com</p>
        </div>

        {/* Pages Links */}
        <div className="footer-column">
          <h4>Pages</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">To Advertise</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-column">
          <h4>Our Company</h4>
          <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Latest Products</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Short Video</a></li>
          </ul>
        </div>

        {/* Social Media and Subscribe */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><img src="../images/facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="../images/youtube-icon.png" alt="YouTube" /></a>
            <a href="#"><img src="../images/telegram-icon.png" alt="Telegram" /></a>
            <a href="#"><img src="../images/instagram-icon.png" alt="Instagram" /></a>
          </div>
          <h4>Subscribe Now</h4>
          <p>Subscribe to watch a helpful video about how to upload a product on Netsa-Delala.</p>
          <button className="subscribe-button">SUBSCRIBE</button>
        </div>
      </div>
    </footer>



  </>
  )
}