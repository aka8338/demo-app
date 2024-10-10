import React from 'react';
import './Landing.css';
const LatestProducts = [
  {
    id: 1,
    name: 'Case Newholland Mesay furgusen tractors',
    description: 'All this machinery and cars with online deals.',
    price: '8,000,000 Birr',
    phone: '0973114299',
    image:'../images/car1.avif',
    category: 'Car',
  },
  {
    id: 2,
    name: 'House For Sale',
    description: 'Prices indicated are starting prices.',
    price: '20,000,000 Birr',
    phone: '0967828141',
    image: '../images/house3.png',
    category: 'House',
  },
  {
    id: 3,
    name: 'True Love Blanket',
    description: 'Size: 220x240CM, Groos weight: 4.50KG',
    price: '3000 Birr',
    phone: '0914196394',
    image: '../images/true.jpg',
    category: 'Blanket',
  },
  {
    id: 4,
    name: 'Hp-Laptop',
    description: 'Size: 220x240CM, Groos weight: 12.80LBS',
    price: '100,000 Birr',
    phone: '0914196394',
    image: '../images/Hp-Laptop.avif',
    category: 'Laptop',
  },
];




const CarsForSale = [
  {
    id: 1,
    name: 'Case Newholland Mesay furgusen tractors',
    description: 'All this machinery and cars with online deals.',
    price: '10,000,000 Birr',
    phone: '0973114299',
    image:'../images/car.jpg',
    category: 'Car',
  },
  {
    id: 2,
    name: 'v-8',
    description: 'Prices indicated are starting prices.',
    price: ' 8,000,000 Birr',
    phone: '0967828141',
    image: '../images/car1.avif',
    category: 'Car',
  },
  {
    id: 3,
    name: 'tesla',
    description: 'Size: 220x240CM, Groos weight: 4.50KG',
    price: '20,000,000 Birr',
    phone: '0914196394',
    image: '../images/car2.avif',
    category: 'Car',
  },
  {
    id: 4,
    name: 'v-8',
    description: 'Size: 220x240CM, Groos weight: 12.80LBS',
    price: '9,000,000 Birr',
    phone: '0914196394',
    image: '../images/car3.avif',
    category: 'Car',
  },
];



const HousesForSale = [
  {
    id: 1,
    name: 'villa',
    description: 'All this machinery and cars with online deals.',
    price: '15,000,000 Birr',
    phone: '0973114299',
    image:'../images/house1.avif',
    category: 'House',
  },
  {
    id: 2,
    name: 'appartama ',
    description: 'Prices indicated are starting prices.',
    price: '25,000,000 Birr',
    phone: '0967828141',
    image: '../images/house2.avif',
    category: 'house',
  },
  {
    id: 3,
    name: 'villa',
    description: 'Size: 220x240CM, Groos weight: 4.50KG',
    price: '30,000,000 Birr',
    phone: '0914196394',
    image: '../images/house3.png',
    category: 'house',
  },
  {
    id: 4,
    name: 'villa',
    description: 'Size: 220x240CM, Groos weight: 12.80LBS',
    price: '28,000,000 Birr',
    phone: '0914196394',
    image: '../images/house2.avif',
    category: 'hous4',
  },
];




const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" />
    <h3>{product.category}</h3>
    <h4>{product.name}</h4>
    <p>{product.description}</p>
    <p className="price">{product.price}</p>
    <p className="phone">📞 {product.phone}</p>
    <button className="read-more">Read More</button>
  </div>
);

const LandingPage= () => (
  <>
  <div className="LandingPage">
    <h2>Latest Products</h2>
    <div className="product-grid">
      {LatestProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>

 {/* cars  for sale  */}
<div className="LandingPage">
    <h2>Cars For Sale</h2>
    <div className="product-grid">
      {CarsForSale.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
  {/* house  for sale  */}
<div className="LandingPage">
    <h2>House For Sale</h2>
    <div className="product-grid">
      {HousesForSale.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
{/* service section  */}

<div className="services-section">
      <div className="service-item">
        <img src="../images/delivery-icon.png" alt="Fast Delivery" className="service-icon" />
        <h3>Fast Delivery</h3>
        <p>caring for your product as our own's</p>
      </div>

      <div className="service-item">
        <img src="../images/customer-service-icon.png" alt="24/7 customer service" className="service-icon" />
        <h3>24/7 customer service</h3>
        <p>Friendly 24/7 customer support</p>
      </div>

      <div className="service-item">
        <img src="../images/money-back-icon.png" alt="Money Back Guarantee" className="service-icon" />
        <h3>Money Back Guarantee</h3>
        <p>30 days return policy</p>
      </div>
    </div>


{/* footer */}
<footer className="footer">
      <div className="footer-container">
        {/* Company Information */}
        <div className="footer-column">
          <img src="your-logo.png" alt="Netsa-Delala Logo" className="footer-logo" />
          <p>
            Ak4 Delala is a website designed for brokers. In this website, anyone
            can advertise their product or service. Register and try it now.
          </p>
          <p><strong>ADDRESS:</strong>Addis Ababa Ethiopia</p>
          <p><strong>PHONE:</strong> +251-949-61-83-38</p>
          <p><strong>OR:</strong> +251-964-84-66-09</p>
          <p><strong>EMAIL:</strong> aklilubeyero@gmail.com</p>
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
);

export default LandingPage;
