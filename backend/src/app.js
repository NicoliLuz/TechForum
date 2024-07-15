
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignSignUp from './componentes/SignSignup';

const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const router = require('./routes/dbRouter');

const app = express();

app.set('port', 3308);
app.use(cors());
app.use(express.json());
app.use('/api', router);

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/signSignUp" exact component={SignSignUp} />
                    {/* Adicione outras rotas conforme necessário */}
                </Switch>
            </div>
        </Router>
    );
}

module.exports = app;