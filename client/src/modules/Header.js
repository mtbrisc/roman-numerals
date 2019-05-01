import React from 'react';
import { Translate } from 'react-localize-redux';
import LanguageChanger from '../components/LanguageChanger';

function Header() {
    return (
        <header className="fixed p-3 mb-10">
            <div className="container">
                <span className="mainTitle"><Translate id="mainTitle">Roman Numeral Converter</Translate></span>
                <div className="pull-right">
                    <LanguageChanger />
                </div>
            </div>
        </header>        
    )
}

export default Header;