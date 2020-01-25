import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/product' component={Product}/>
        <Route exact path='/form' component={Form}/>
        <Route path='/form/:id' component={Form}/>
        <Route path='/header' component={Header}/>
    </Switch>
)