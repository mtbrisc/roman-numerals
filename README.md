How to Build
============
Clientside - React APP
----------------------
inside **./client/** folder:
`npm install`

then choose from the following:
|dev start|basic start|test|build|prepare for deployment|
|---|---|---|---|---|
|npm develop|npm start|npm test|npm build|npm pre-production|

Serverside - Node + Express
---------------------------
inside **./server/** folder:
`npm install`
`npm start`
___
Engineering & Testing Methodology
=================================
For roman numeral reference, used: <https://en.wikipedia.org/wiki/Roman_numerals>

|Symbol|I|V|X|L|C|D|M|
|---|---|---|---|---|---|---|---|
|Value|1|5|10|50|100|500|1000|

And decided to use Vinculum bar notation to support numbers from `1 - 1000000`

In terms of methodology and focus, mainly focused on the react app, and even ended up calling the conversion function clientside since it runs immediately on input and gives a good user experience that way - but did also make a node endpoint `/romannumeral?query={integer}` according to the general spec. However, since most of focus was for the React UI - here's more details about that:

Clientside App Specs & Description
----------------------------------

- **Create a React based UI which takes a number, and converts it to roman numerals (1-255) and displays it**
   * As stated above, decided to expand the range from (1-100000). The UI that seemed elegant and good in this instance was on any input, immediately render the corresponding output
- **Should support full input validation in the UI** -
    * Used a combination of semantic html properties and custom event listener error checking to ensure input field accepts correct type, and stays within desired range
- **Should support localization of 2 (or more) languages for the UI, with some mechanism to switch locals** -
    * Built language dropdown selector in header, updates components reloading the page
    * Localization managed in JSON for easy testing, scalability
- **Should support accessibility in the UI (keyboard controls)** -
    * Follows <https://www.w3.org/WAI/> recommendations, allowing keyboard, mouse, high contrast etc with a minimal and complete UI. The number input field can optionally be interacted with by using arrow keys, as can the langauge dropdown.
- **Should support UI automation testing (framework your choice)** -
    * As part of the UI Automation testing - chose to use Jest & Enzyme, some of the most robust and well support React testing frameworks.
    * UI tests run when any of the following are called: `npm test` `npm pre-production` `npm develop`
- **Should support Javascript Unit testing (framework you choice)** -
    * The JS unit testing also done using jest, and offer upper lower boundary testing, type testing, as well as a range of known / expected values.
    * Javascript Unit tests also run via `npm test` `npm pre-production` `npm develop`
- **Optionally you can choose to run a service in the backend (node or java) to do the conversion, or leverage client side implementation of conversion functionality (your choice)** 
    * Although in this instance, UI made alot of sense for giving a fast, immediately returned value to the end user - built a sibling service within **./server/** that uses the same computation module that I made for the clientside app

Package Layout
==============
`client` - clientside react app
* `config` - configs for react tests, environment
* `public` - compiled assets, styles
* `scripts` - scripts for hot module reloaded start, test, build
* `src` - contains main react app as well as react components, modules, localization, tests, and pre-processed styles

`server` - lightweight Node + Express app that runs http server on 8080

Dependency Attribution
======================
For the roman numeral function, no external dependencies were needed, and reference for the approach was obtained via Wikipedia

For the React app, used the standard React app recommended build tooling, including eslint, webpack, node-sass, sass-loader, babel, jest, enzyme and for the localizations state management used react-localize-redux

For the Node + Express app, only dependecy (besides node) was express