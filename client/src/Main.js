import React from 'react';
import Header from './modules/Header';
import NumberConvertForm from './modules/NumberConvertForm';
import Footer from './modules/Footer';
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "./localizations/global.json";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.props.initialize({
            languages: globalTranslations.languages,
            translation: globalTranslations,
            options: { renderToStaticMarkup }
        });
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <NumberConvertForm min={0} max={1000000} />
                <Footer />  
            </React.Fragment> 
        )     
    }
}

export default withLocalize(Main);