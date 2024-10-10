import { Link } from 'react-router-dom';

import './Login.css';
function Login(){
    
    return(
        <div class="register-c ">
        <h2 className='header-2'>Login</h2>
        <form>
            
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email Address" required />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" required />
            </div>
            
            <button type="submit" class="register-b">Login</button>
            <p className="login-prompt">
            Don’t have an account? <Link to="/register">Sign up here!</Link>.
                    </p>
        </form>
        
    </div>
    );
}
export default Login;