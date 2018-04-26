import React, { Component } from 'react';
import '../../styles/index.css';

class Header extends Component {
    render() {

        const marStyle = {
            "marginBottom" : "0"
        }

        const txtStyle = {
            "padding-left" : "400px"
        }

        const imgStyle = {
            "width": "300px",
            "height": "100px",
            "float": "right"
        }

        return (
            <div>
                <nav style={marStyle}>
                    <div>
                    </div><img src={require("../../images/nusiss.png")} alt="NUS ISS" style={imgStyle}/>
                    <br/>
                    <h1 align="center"><u style={txtStyle}>NUS ISS BA BEAD 27 - Brand Analytics Engine</u></h1>
                </nav>
            </div>
        );
    }
}

export default Header;