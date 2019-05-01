import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import NumberConvertForm from '../modules/NumberConvertForm';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe("Input Field UI", () => {
    it('should render an input field', () => {
        const wrapper = shallow(<NumberConvertForm />);
        expect(wrapper.find('input').length).toBe(1);
    });
    it('should reject non-numeric input', () => {
        const wrapper = mount(<NumberConvertForm />);
        wrapper.find('input').getDOMNode().value = 'Attempt non numeric';
        wrapper.find('input').simulate('input');
        expect(wrapper.find('input').getDOMNode().value).toBe(""); // field blanks if non-numeric input  
    });
    it('should reset values below lower bound to 0', () => {
        const wrapper = mount(<NumberConvertForm />);
        wrapper.find('input').getDOMNode().value = "-10000";
        wrapper.find('input').simulate('input');
        expect(wrapper.find('.roman-numeral-output').getDOMNode().innerHTML).toBe("");
    });
    it('should reset values above upper bound to 1000000', () => {
        const wrapper = mount(<NumberConvertForm />);
        wrapper.find('input').getDOMNode().value = "100000000";
        wrapper.find('input').simulate('input');
        expect(wrapper.find('.roman-numeral-output').getDOMNode().innerHTML).toBe("M̅");
    });
    it('should render matching roman numeral on input', () => {
        const wrapper = mount(<NumberConvertForm />);
        wrapper.find('input').getDOMNode().value = "1";
        wrapper.find('input').simulate('input');
        expect(wrapper.find('.roman-numeral-output').getDOMNode().innerHTML).toBe("I");
    });
    it('should display error message on invalid input', () => {
        const wrapper = mount(<NumberConvertForm />);
        wrapper.find('input').getDOMNode().value = "INVALID";
        wrapper.find('input').simulate('input');
        expect(wrapper.find('.validation-message').getDOMNode().classList).toContain('errors-present');
    });
});