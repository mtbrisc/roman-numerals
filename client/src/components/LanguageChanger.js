import React from "react";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "localizations/global.json";

const LanguageChanger = ({ languages, activeLanguage, setActiveLanguage }) => (
    <select aria-label={activeLanguage ? globalTranslations.languageSelector[activeLanguage.code] : globalTranslations.languageSelector["en"]} className="language-selector" onChange={(e) => setActiveLanguage(e.target.value)}>
    {languages.map(lang => {
        let selected = activeLanguage && activeLanguage["code"] === lang.code ? "selected" : "";
        return (
            <option key={lang.code} value={lang.code} defaultValue={selected}>{lang.name}</option>
        );
    })}
    </select>
);

export default withLocalize(LanguageChanger);