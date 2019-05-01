import intToRomanNumeral from '../utilities/intToRomanNumeral';

/* Functional Tests for the intToRomanNumeral function (not UI, just function) */

describe("intToRomanNumeral functional tests", () => {
    describe("Type Safe", () => {
        test('if input is falsey output empty string', () => {
            expect(intToRomanNumeral()).toBe("");
            expect(intToRomanNumeral(null)).toBe("");
            expect(intToRomanNumeral(undefined)).toBe("");
            expect(intToRomanNumeral(false)).toBe("");
        });
        test('if input is non-numeric output empty string', () => {
            expect(intToRomanNumeral("Not a Number")).toBe("");
            expect(intToRomanNumeral(NaN)).toBe("");
        });
    });
    describe("Boundary Checking", () => {
        test('if input is negative output should be blank', () => {
            expect(intToRomanNumeral(-1)).toBe("");
            expect(intToRomanNumeral(-1000000000)).toBe("");
        });
        test('if input is bigger than max output should be intToRomanNumeral(1000000) - max val', () => {
            expect(intToRomanNumeral(1000001)).toBe("M̅");
            expect(intToRomanNumeral(1000001)).toBe(intToRomanNumeral(1000000));
        });
    });
    describe("Expected output for known values", () => {
        const knownSets = {
            0: "",
            1: "I",
            2: "II",
            3: "III",
            4: "IV",
            5: "V",
            6: "VI",
            7: "VII",
            8: "VIII",
            9: "IX",
            10: "X",
            4000: "I̅V̅",
            4999: "I̅V̅CMXCIX",
            25459: "X̅X̅V̅CDLIX",
            1000000: "M̅"
        };

        Object.keys(knownSets).forEach(function (key) {
            let val = knownSets[key];
            test(`if input is ${key} output should be ${val}`, () => {
                expect(intToRomanNumeral(key)).toBe(val);
            });
        });
    });
});
