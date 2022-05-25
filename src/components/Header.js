import React, { Component, useState } from "react";


class Header extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="">
                <div className="nav-container flex">
                    <h1><a href="/" className="logo"> iMusic </a></h1>
                    <div className="nav-list-container"> 
                        <ul className="flex nav-ul">
                            <li><a href=""> About us </a></li>
                            <li><a href=""> Contact us </a></li>
                            <li><a href="/login"> {this.props.isLogin} </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;