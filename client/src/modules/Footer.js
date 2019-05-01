import React from 'react';
import { Translate } from 'react-localize-redux';
import AnimatedLogo from '../components/AnimatedLogo';

function Footer() {
    return (
        <footer className="p-5 text-center">
            <div className="container">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Translate id="footer.documentation">Documentation</Translate>
                </a>|
                <a href="https://en.wikipedia.org/wiki/Roman_numerals" target="_blank" rel="noopener noreferrer">
                    <Translate id="footer.romanNumerals">Roman Numerals</Translate>
                </a>|
                <a href="https://en.wikipedia.org/wiki/Roman_numerals#Vinculum" target="_blank" rel="noopener noreferrer">
                    <Translate id="footer.vinculumReference">Vinculum Reference</Translate>
                </a>
            </div>
            <AnimatedLogo />
        </footer>
    )
}

export default Footer;
