import React, {Component} from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

class ContactHome extends Component {
    render() {
        const imgStyle = {
            "width": "300px",
            "height": "100px",
        }

        return (
            <div>
                <Header/>
                <Sidebar />
                <div classname= "main">
                    <div class="divcenter">
                        <h1>NUS ISS BA BEAD 27</h1>
                        <h3 style={{ "padding-left": "20%"}}>
                            Dhruv Madhangopal <br/>
                            Divahar Sethuraman <br/>
                            Ethiraj Srinivasan <br/>
                            Gautam Krishnan <br/>
                            Naitik Shukla <br/>
                            Vignesh Srinivasan
                        </h3>
                        <img src={require("../../images/nusiss.png")} alt="NUS ISS" style={imgStyle}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactHome;