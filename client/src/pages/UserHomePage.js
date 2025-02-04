import { Link } from 'react-router-dom'
import './User.css'
export default function UserHomePage() {
  return (
    <div className='conta'>
    <header className="head">
      <nav className="navig">
        <ul>
          <li><Link to="#">Dashboard</Link></li>
          <li><Link to="/manage">Manage Products</Link></li>
          <li><Link to="/profile">Profile Data</Link></li>
          <li><Link to="/logout">Log out</Link></li>
        </ul>
      </nav>
    </header>


    <div className="dashboard">
      <h2>HI ak, you are logged in successfully to Ak4 Delala.</h2>
      <div className='pro'>
      <ul className='ul'>
          <li><Link to="/upload">Upload product,</Link></li>
          <li><Link to="/edit">Edit your product</Link></li>
          <li><Link to="#delete">Delete your product</Link></li>
          <li><Link to="/profile">Watch profile</Link></li>
      
        </ul>
        </div>
      <button className="continue-button">Click To Continue</button>

      <div className="tutorials">
        <img src="link_to_your_image1" alt="Tutorial 1" />
        <img src="link_to_your_image2" alt="Tutorial 2" />
      </div>
    </div>


    
    
    </div>
  )
}