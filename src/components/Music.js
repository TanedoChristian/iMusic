import React, {Component} from 'react'
import test from './test.mp3';


class Music extends Component{

        
        render(){

                return(
                        <div>

                                <audio controls preload = "auto">
                                        <source src={test} type="audio/mpeg" />

                                </audio>
                        </div>
                )

        }


}


export default Music;
