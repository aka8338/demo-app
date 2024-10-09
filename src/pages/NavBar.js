
import './NavBar.css';
import './Searchbar.css';


export default function NavBar() {
  return (
    <div className="search-container">
        <h1 navbar-brand>DELALA SERVICES</h1>
    <select className="dropdown">
        <option value="others">-- others --</option>
        {/* Add more options as needed */}
    </select>
    <input
        type="text"
        className="search-input"
        placeholder="Search your Product ..."
    />
    <button className="search-button">
        <i className="fas fa-search"></i> {/* Font Awesome search icon */}
    </button>
    <button className="register-button">REGISTER</button>
    <button className="login-button">LOGIN</button>
</div>
  )
}