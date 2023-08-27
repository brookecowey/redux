import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Containers/Home'
import About from './Components/About'
import Car from './Containers/Car'
import Dashboard from './Containers/Dashboard'

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} />
        </Routes>
    );
};

export default Router;