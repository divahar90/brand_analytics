import React, {Component} from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

class ContactHome extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Sidebar />
                <div classname= "main">
                </div>
            </div>
        );
    }
}

export default ContactHome;