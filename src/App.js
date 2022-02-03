import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar.component';
import Home from './components/home.component';
import Movies from './components/movies.component';
import AddMovie from './components/add-movie.component';
import Login from './components/login.component';
import Signup from './components/signup.component';
import NotFound from './components/not-found.component';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/movies" component={Movies} />
                <Route path="/add-movie" component={AddMovie} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </>
    );
};

export default App;
