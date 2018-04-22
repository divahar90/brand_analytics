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

const Root = () => {
    return (

        <BrowserRouter>

            <Switch>
                <Route path="/brandengine/home" component={Home} />
            </Switch>

        </BrowserRouter>

    )
}

ReactDOM.render(<Root />, document.getElementById('root'));