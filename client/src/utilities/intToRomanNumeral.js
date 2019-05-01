/* About:
 * A module I developed based on info from Wikipedia,
 * concerning Roman Numerals and Vinculum notation
 * Some of the exact notations ( overline vs. parens etc )
 * seem to be a bit debated, but this format for both
 * input and output made the most sense to me
 **/

// Legacy browser support
import repeatLegacySupport from '../legacy/repeatLegacySupport';
repeatLegacySupport();

const overline = "\u0305"; //UTF-8 overline
const upperBound = 1000000;
const lowerBound = 1;

const numeralMap = {
    "1000000": `M${overline}`,
    "500000": `D${overline}`,
    "100000": `C${overline}`,
    "50000": `L${overline}`,
    "10000": `X${overline}`,
    "5000": `V${overline}`,
    "4000": `I${overline}V${overline}`,
    "1000": "M",
    "900": "CM",
    "500": "D",
    "400": "CD",
    "100": "C",
    "90": "XC",
    "50": "L",
    "40": "XL",
    "10": "X",
    "9": "IX",
    "5": "V",
    "4": "IV",
    "1": "I"
};

const intToRomanNumeral = (num) => {
    if (!num || isNaN(num) || num < lowerBound) {
        return "";
    }
    if(num > upperBound) {
        num = upperBound;
    }
    let orderedNumerals = Object.keys(numeralMap).sort((a, b) => b - a);
    let romanNumeralStr = "";
    let remainder = num;

    for (let i = 0; i < orderedNumerals.length; i++) {
        let val = orderedNumerals[i];
        let key = numeralMap[val];
        let modRes = remainder % val;
        let repititions = Math.floor(remainder / val);
        if (repititions > 0) {
            romanNumeralStr += key.repeat(repititions);
        }
        remainder = modRes;
    }
    return romanNumeralStr;
};

export default intToRomanNumeral;