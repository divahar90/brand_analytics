import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

class Home extends Component {
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

export default Home;