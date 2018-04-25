import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div class="sidenav">
                    <img src={require("../../images/avatar.png")} className="avatar"/>
                    <a className={"pulltop"}>Welcome Diva</a>
                    <a className={"pullmid"} href="/brandengine/home">Home</a>
                    <a className={"pullmid"} href="/brandengine/brands">Brands</a>
                    <a className={"pullmid"} href="/brandengine/about-us">About us</a>
                    <a className={"pullmid"} href="/brandengine/contact">Contact</a>
                    <a className={"pullbottom"}
                                href="/brandengine/contact">Logout</a>
                </div>
            </div>
        );
    }
}

export default Sidebar;