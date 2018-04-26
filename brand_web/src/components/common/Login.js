import React, { Component } from 'react';
import Header from './Header';
import { Redirect } from 'react-router'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            password: '',
            redirect: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

    }

    render() {
        const { redirect } = this.state.redirect;
        if (redirect) {
            return (<Redirect to='/brandengine/home' />);
        }

        return (
            <div>
                <Header />
                <form className="login" onSubmit={this.handleSubmit}>
                    <h2 align={"center"}>Login</h2>
                    <hr />
                    <div>
                        <label htmlFor="userId">User ID:</label>
                        <input type="text" required className="input" name="userId" id={"userId"}
                               value={this.state.userId}
                               onChange={e => this.setState({ userId: e.target.value })} />
                        <br />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" required className="input" name="password" id={"password"}
                               value={this.state.password}
                               onChange={e => this.setState({ password: e.target.value })} />
                        <br />
                    </div>
                    <div align="center">
                        <button type="submit" className="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;