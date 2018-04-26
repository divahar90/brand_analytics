import React, {Component} from 'react';
import { Redirect } from 'react-router'

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }

    logout(event){
        event.preventDefault()
        localStorage.clear();
        this.setState({logout: true});
    }

    render() {

        if(this.state.logout){
            return <Redirect to='/brandengine/login'/>;
        }

        return (
            <div>
                <div className="sidenav">
                    <img src={require("../../images/avatar.png")} className="avatar"/>
                    <a className={"pulltop"}>Welcome Diva</a>
                    <a className={"pullmid"} href="/brandengine/home">Home</a>
                    <a className={"pullmid"} href="/brandengine/brands/home">Brands</a>
                    <a className={"pullmid"} href="/brandengine/about-us">About us</a>
                    <a className={"pullmid"} href="/brandengine/contact">Contact</a>
                    <a className={"pullbottom"}
                                onClick={(e) => {this.logout(e)}}>Logout</a>
                </div>
            </div>
        );
    }
}

export default Sidebar;