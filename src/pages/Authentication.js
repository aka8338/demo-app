function Authentication (){
    return(
        <>
        <div className="register-container">
        <h2>Register</h2>
        <form >
            <div className="form-group">
                <label>Username</label>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="User Name" 
                    required
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    required
                />
            </div>
            <div className="form-group">
                <label>Email Address*</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    required
                />
            </div>
           
            <button type="submit" className="register-button">REGISTER</button>
        </form>
        <div className="links">
            <p>I Already Have An Account! <a href="/signin" className="signin-link">Sign-In Now</a></p>
            <p><a href="/" className="home-link">Back To Home Page! Home</a></p>
        </div>
    </div>
    </>
    );
}
export default Authentication;