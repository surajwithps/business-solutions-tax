import React from 'react'

function Login() {
  return (
    <div>
        <div>
            <div className='login_nav'>
                <img src="https://app.hellobonsai.com/assets/logo-icon-6263c52498bd8749917ac337dfcb797432a7d3df25bc04e1a5ce2b0e7451268e.png" alt="" />
                <div>
                    <button>Login</button>
                    <button>Singn up</button>
                </div>
            </div>
            <hr style={{border:'0.1px solid aliceblue'}}/>
         </div>
         <div className='login_form_div'>
         <div className='login_side_div_info'>
            <div>
                <h4>The Changelog</h4>
            </div>
            <hr />
            <div>
                <p></p>
            </div>
        </div>  
            <div  className='main_login_form'>
                <h3>Sign In</h3>
                <div className='google_div'>
                    <img src="https://lh3.googleusercontent.com/StND2cg3sSbR6l-AHr3VdxKziIhEP4kYHQiTppD-aKc6gwn7PVdht1YqzjWSmwf5JLWf=w200-rwa" alt="google_logo" />
                    <p>Sign In with Google</p>
                </div>
                 {/* <hr /> */}
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Password'/>
                <div className='remember'>
                <label htmlFor="remember">Remember me</label>
                <input type="checkbox" id='remember' name="remember"/>
                </div>
               
                <button id='submit'>Log in</button>
                <p>Reset Password</p>
                <p>Resend Verification Email</p>
            </div>     
               
        </div>
    </div>

  )
}

export default Login