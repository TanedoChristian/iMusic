import React, { Component } from 'react'


class Signup  extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='flex login-wrapper'>
                <div className='login-container flex'>
                    <form className='login-form' action="http://localhost/iMusic/scripts/signup.php" method="POST">

                        <label for = "username"> Email </label>
                        <input type="text" name='email' placeholder='Email or Username'></input>

                        <label for = "password"> Password </label>
                        <input type="password" name='password' placeholder='Password'></input>
                        <input type="submit" value="Create Account" name="submit"></input>
                        </form>
                </div>

            </div>
        )
    }
}

export default Signup;
