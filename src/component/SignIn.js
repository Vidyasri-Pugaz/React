import './header';

function Signin() {
    return(
        <>
        <body className="sign">
           <div className="sign-in-form"> 
            <h2>Sign In</h2> 
            <form> 
                <div className="form-group"> 
                    <label htmlFor="email">Email:</label> 
                    <input type="email" id="email" name="email" required/> 
                </div> 
                <div className="form-group"> 
                    <label htmlFor="password">Password:</label> 
                    <input type="password" id="password" name="password" required/>
                </div> 
                <button type="submit" className="btn">Sign In</button> 
            </form>  
          </div>  
        </body>       
        </>
    )
}
export default Signin;