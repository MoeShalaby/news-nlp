# News Article Natural Language Processing

## Description
A project for udacity Front End Web Developer nonodegree. After running the website, you can input a new article or url which will be proccessed by meaningcloud sentiment NLP API.

## Dependencies
- Node JS and ExpressJS for server.
- Webpack 5 and Babel.
- OptimizeCSSAssetsPlugin and TerserPlugin for optimization.
- Workbox webpack service worker plugin for caching.
- Jest and supertest for testing.

## Getting started
- run ``npm install`` to install the dependencies.
- create ``.env`` file in root directory. Add ``API_KEY=<YOUR_API_KEY_HERE>`` to the file.
- for starting in dev, run ``npm run start-dev`` and ``npm run build-dev``.
- for starting in prod, run ``npm run build-prod`` and ``npm run start``.
- for testing, run ``npm rub jest``.
