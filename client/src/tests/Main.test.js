import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Main from 'Main';
import Adapter from 'enzyme-adapter-react-16';
import globalTranslations from "localizations/global.json";

Enzyme.configure({ adapter: new Adapter() });

describe("Main app (UI Testing)", () => {
    it('renders key UI elements', () => {
        const wrapper = mount(<Main />);
        expect(wrapper.find('Main').length).toBe(1);
        expect(wrapper.find('Header').length).toBe(1);
        expect(wrapper.find('NumberConvertForm').length).toBe(1);
        expect(wrapper.find('Footer').length).toBe(1);
    });
    describe("Localization", () => {
        const wrapper = mount(<Main />);

        globalTranslations.languages.forEach((el, i) => {
            it('renders correct data for after language selector changed to ' + el.name, () => {
                wrapper.find('.language-selector').getDOMNode().value = el.code;
                wrapper.find('.language-selector').simulate('change');
                const checkLocalization = () => {
                    expect(wrapper.find('.mainTitle').getDOMNode().innerHTML).toBe(globalTranslations.mainTitle[i]);
                };
                setTimeout(function () {
                    checkLocalization();
                }, 0);
            });
        });
    });  
})