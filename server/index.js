const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const intToRomanNumeral = require('./intToRomanNumeral')

app.get('/romannumeral', (req, res) => {
    const param = "query";
    const val = req.query[param];
    const computation = intToRomanNumeral(val);
    if (computation) {
        return res.status(200).json({
            success: true,
            value: computation,
            errors: [] }
        );
    } else {
        return res.status(422).json({
            success: false,
            value: computation,
            errors: ['query must be number from 1 - 1000000']
        });
    }
});

app.listen(port, () => console.log(`Roman Numeral app listening on port ${port}!`))