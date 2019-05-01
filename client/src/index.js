import React from 'react';
import { render } from "react-dom";
import './styles/main.scss';
import Main from './Main';
import { LocalizeProvider } from "react-localize-redux";

const App = props => (
    <LocalizeProvider>
        <Main />
    </LocalizeProvider>
);

render(<App />, document.getElementById('root'));