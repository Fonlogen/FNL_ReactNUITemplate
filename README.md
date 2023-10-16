# FNL_ReactNUITemplate
Pre-Configured NUI + React FiveM Template

## Why this repo exists?
After many hours used to create and configure basic React FiveM resources and integrating NUI into FiveM, i've decided to create this repository to speed-up the work for other developers, so that you just need to clone this repo and launch ```npm install``` and ```npm run build``` to start working.

## Available scripts
* ```npm run dev``` - Simple RUN script with HRM for working and hot-reloading to the react ui
* ```npm run dev-host``` - Same as ```npm run dev``` with the ```--host``` flag, so that you can access you dev app from external or remote device
* ```npm run build``` - Runs the ```vite build``` command to build the entire project

## Preinstalled libraries
* FontAwesome SVG Solid Icons
* TailwindCSS (WIP)
* React 18

## Utilities
There are 2 utilities right now in the repo.
* ```src/utils/FiveM.js``` - Provides two exported interfaces for comunication with te FiveM NUI through ```fetchNui()``` and ```callNui()``` functions. Needs to be imported with ```import { fetchNui, callNui } from ../utils/FiveM.js``` (This assumes you are importing them from ```src/components/App.jsx```)
* ```src/utils/Translator.js``` - Provides one exported function called ```TranslateStr()``` that accepts a string that will be associated with the corresponding value / translated string. Useful for translations and variable-like strings that needs to be parsed

## License
You can use this repo wherever you want. Feel free to fork and pull-requests for modifications

Happy Coding!
- Fonlogen
