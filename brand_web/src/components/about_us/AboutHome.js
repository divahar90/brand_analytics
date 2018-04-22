import React, {Component} from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

class AboutHome extends Component {
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

export default AboutHome;