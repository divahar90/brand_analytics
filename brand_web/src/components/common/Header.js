import React, { Component } from 'react';
import '../../styles/index.css';

class Header extends Component {
    render() {

        const marStyle = {
            "marginBottom" : "0"
        }

        const txtStyle = {
            "padding-left" : "220px"
        }

        const imgStyle = {
            "width": "300px",
            "height": "100px",
            "float": "right"
        }

        return (
            <div>
                <nav className ="navbar navbar-default navbar-static-top" style={marStyle}>
                    <div className="navbar-header">
                            <span className="icon-bar"></span><span className="icon-bar"></span>
                    </div><img src={require("../../images/nusiss.png")} alt="NUS ISS" style={imgStyle}/>
                    <br/>
                    <h1 align="center"><u style={txtStyle}>NUS ISS BA BEAD 27 - Brand Analytics Engine</u></h1>
                </nav>
            </div>
        );
    }
}

export default Header;