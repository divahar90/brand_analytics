import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div class="sidenav">
                    <a href="/brandengine/home">Home</a>
                    <a href="/brandengine/brands/home">Brands</a>
                    <a href="/brandengine/about-us">About us</a>
                    <a href="/brandengine/contact">Contact</a>
                </div>
            </div>
        );
    }
}

export default Sidebar;