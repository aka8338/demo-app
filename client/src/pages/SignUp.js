import { Link } from 'react-router-dom';




function Authentication() {
    return (
        <>
           <div class="register-c">
    <h2 className='header-2'>Create an Account</h2>
    <form>
        <div class="form-group">
            <label>Username</label>
            <input type="text" name="userName" placeholder="User Name" required />
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" required />
        </div>
        <div class="form-group">
            <label>Phone Number</label>
            <input type="password" name="password" placeholder="Password" required />
        </div>
        <button type="submit" class="register-b">Signup</button>
        <p className="login-prompt">
                    If you already have an account, <Link to="/login">login here</Link>.
                </p>
    </form>
    
</div>

        </>
    );
};
export default Authentication;