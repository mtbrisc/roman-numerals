How to Build
============
Start the server - forthcoming

Engineering & Testing Methodology
=================================
For roman numeral reference, used: <https://en.wikipedia.org/wiki/Roman_numerals>

|Symbol|I|V|X|L|C|D|M|
|---|---|---|---|---|---|---|---|
|Value|1|5|10|50|100|500|1000|

Created node endpoint `/romannumeral?query={integer}` according to the general spec, in addition to the front end specs & methodology. Focused tests mainly around Front End coverage, but added some basic for the endpoint

Front End Specs + Methodology
-----------------------------
Since this test was tailored to front end, here's a list of the requirements as well as methodology:

- **Create a React based UI which takes a number, and converts it to roman numerals (1-255) and displays it**
   * Since the first spec / primary focus is the React based UI, originally stubbed out the API response - treating it as a black box before building out the functionality in Node for that
- **Should support full input validation in the UI** -
    * In UI Layer, initially using browser input type validation, as well as some clientside validation & descriptive messaging
- **Should support localization of 2 (or more) languages for the UI, with some mechanism to switch locals** -
    * Language dropdown to change UI elements, without reloading the page is a good experience for the end user - so passing `lang` down through the state gives the desired functionality 

- **Should support accessibility in the UI (keyboard controls)** -
    * Follows <https://www.w3.org/WAI/> recommendations, allowing keyboard, mouse, high contrast etc with a minimal and complete UI

- **Should support UI automation testing (framework your choice)** -
    * As part of the UI Automation testing - chose to use Jest (automated testing framework with assert) & Pupetteer (headless chrome + true visual testing tool). This suite I wanted to provide both headless and full visual output

- **Should support Javascript Unit testing (framework you choice)** -
    * The JS unit testing also done through asserts, running before build to ensure the app / service could be plugged into a CI/CD pipeline without any bad commits. Catch issues on local

- **Optionally you can choose to run a service in the backend (node or java) to do the conversion, or leverage client side implementation of conversion functionality (your choice)** -
    * Although I've specialized & gotten a lot of experience over the years in Front-end, also really enjoy building and working within Full-stack & backend contexts, so build a node backend that feeds the computation to the front-end via API endpoint

Package Layout
==============
`public` - compiled assets, styles

`src` - dev files

`server` - backend service

`test` - test files

Dependency Attribution
======================

Forthcoming
