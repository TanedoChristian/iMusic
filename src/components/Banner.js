import React, { Component } from "react";


class Banner extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="flex banner-wrapper">
                <div className="banner"></div>
            </div>
        )
    }
}

export default Banner;