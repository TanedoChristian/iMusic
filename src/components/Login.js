import React, { Component } from 'react'


class Login extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='flex login-wrapper'>

                <div className='login-container flex'>
                    <form className='login-form' action="http://localhost/react/login.php" method="POST">
                        <label for = "username"> Email </label>
                        <input type="text" name='username' placeholder='Email or Username'></input>
                        <label for = "password"> Password </label>
                        <input type="password" name='password' placeholder='Password'></input>
                        <p> Forgot Password?</p>
                        <input type="submit" value="LOG IN" name="submit"></input>
                        </form>
                </div>

            </div>
        )
    }
}

export default Login;
