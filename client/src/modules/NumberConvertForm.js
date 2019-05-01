import React from 'react';
import { Translate } from 'react-localize-redux';

// Clientside converter for now, could swap for serverside converter
import intToRomanNumeral from '../utilities/intToRomanNumeral';

// Validation error types
const ABOVE_MAX = "ABOVE_MAX";
const BELOW_MIN = "BELOW_MIN";
const NON_NUMERIC = "NON_NUMERIC";

class NumberConvertForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isValid: true, // init to valid
            errorCode: "",
            romanNumeral: ""
        };
    }

    validationState = (isValid, errorCode) => {
        this.setState({
            isValid,
            errorCode
        });
    }

    captureInput = ({ target }) => {
        var event = new Event('input', { bubbles: true });
        target.dispatchEvent(event);     
    }

    validateInput = ({ target }) => {   
        let inputVal = target.value;
        if (inputVal > 0 && inputVal <= this.props.max && Number.isInteger(+inputVal)) {
            if (inputVal < this.props.max) {
                this.validationState(true, "");
            }            
        } else {
            if (inputVal >= this.props.max) {
                this.validationState(false, ABOVE_MAX);
                inputVal = this.props.max;  
            } else if (isNaN(inputVal) || !inputVal) {
                this.validationState(false, NON_NUMERIC);
            } else if (!isNaN(inputVal) && inputVal <= 0) {
                this.validationState(false, BELOW_MIN);
                inputVal = 0;
            }
            if (!Number.isInteger(+inputVal)){
                inputVal = Math.round(inputVal);
            }             
        }
        this.setState({
            romanNumeral: intToRomanNumeral(inputVal)
        });
        target.value = inputVal; // reset if certain conditions are not met
    }

    convert = (event) => {
        return true;
    };

    render() {
        return (
            <section className="m-10 p-10">
                <div className="container primary input-wrapper">
                    <div className="block">
                        <p className="instruction-text"><Translate id="form.instructions.pre" /> {this.props.max} <Translate id="form.instructions.post" /></p>  
                        <div className="card">
                            <label htmlFor="input"><Translate id="form.label.inputField" /></label>
                            <input id="input" tabIndex="0" type="number" min={0} max={this.props.max} step={1} pattern="\d+" onInput={this.validateInput} onBeforeInput={this.captureInput} title="Numbers only" name="decimalinput" className={`${!this.state.isValid ? "errors" : ""}`}
                            />
                            <p className={`validation-message ${!this.state.isValid ? "errors-present" : ""}`}>{
                                (((this.state.errorCode === NON_NUMERIC) && (
                                    <Translate id="form.validation.nonNumeric" />
                                )) || ((this.state.errorCode === BELOW_MIN) && (
                                    <Translate id="form.validation.belowMin" />
                                )) || ((this.state.errorCode === ABOVE_MAX) && (
                                    <Translate id="form.validation.aboveMax" />
                                )))
                            }</p>
                            <p className="m-5">
                                <label htmlFor="output"><Translate id="form.label.outputField" /></label>
                                <span id="output" name="output" className="roman-numeral-output">{this.state.romanNumeral}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NumberConvertForm;