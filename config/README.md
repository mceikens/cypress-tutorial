# Config


## Contents
- [What are configs for?](#what-are-configs-for)
- [Basics](#bascis)
- [Documentation](#documentation)


## What are configs for?
In configs will be saved all environment variables and all necessary configuration about our test environment.

## Basics

In our environment we have 3 stages.
- Local environment (localhost and so one)
- Stage environment (styleguide, stage or qs)
- Prod environment (live server)

## Starting
Before you start to develop or to run tests please fill your needed host in to your url environment of your stage.

To start your tests, you have to options

Using start with gui
```bash
yarn run e2e:start:$YOUR_STAGE
```

Using run without gui
```bash
yarn run e2e:run:$YOUR_STAGE
```

Both will generate a mochawesome report under `/reports`

## Documentation
- [Cypress Doc](https://docs.cypress.io/guides/references/configuration#Viewport)