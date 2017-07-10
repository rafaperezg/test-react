//Dependencias
import React from 'react';
import { Route, Switch} from 'react-router-dom';

//Componentes
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/About" component={ About }></Route>
            <Route exact path="/Contact" component={ Contact }></Route>
            <Route exact path="/" component={ Home }></Route>
            <Route component={ Page404 }></Route>
        </Switch>
    </App>;

export default AppRoutes;