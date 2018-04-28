/*Author: Diva
Date Created: 4/12/17
Description: Parent js file which has all routing mappings
Modified By:
Modified Date:
 */

import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './styles/index.css';
import Home from './components/common/Home';
import BrandHome from './components/brands/BrandHome';
import ContactHome from './components/contact/ContactHome';
import BrandDetailed from "./components/brands/BrandDetailed";
import Login from "./components/common/Login";

const Root = () => {
    return (

        <BrowserRouter>

            <Switch>
                <Route path="/brandengine/home" component={Home} />
                <Route path="/brandengine/brands/home" component={BrandHome} />
                <Route path="/brandengine/brands/brand" component={BrandDetailed} />
                <Route path="/brandengine/contact" component={ContactHome} />
                <Route path="/brandengine/login" component={Login} />
            </Switch>

        </BrowserRouter>

    )
}

ReactDOM.render(<Root />, document.getElementById('root'));