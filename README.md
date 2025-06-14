<h1 align="center">Expo Boilerplate</h1>

<br>

- [Boilerplate Features](#Boilerplate-Features)	
- [Structure](#Structure)
	- [Assets](#Assets)
	- [Components](#Components)
	- [Helpers](#Helpers)
	- [Hooks](#Hooks)
	- [Localization](#Localization)
	- [Providers](#Providers)
	- [Routers](#Routers)
	- [Store](#Store)
	- [Styles](#Styles)
	- [Utils](#Utils)
- [Run in Dev Environment](#Run)
- [Code Push](#Push)
- [Run Expo Go](#ExpoGo)
- [Expo Project Link](#ExpoProjectLink)



<br>

<a id="Boilerplate-Features"></a>
## Boilerplate Features:

* Routing
* Redux Toolkit
* Theme
* Local Storage
* Provider example
* Dark Theme Support
* Multi Language Support 
* Folder Structure
* TypeScript
* Font

<br>


<a id="Structure"></a>
# Expo Boilerplate Structure

```
src
 ├── @types
 ├── assets
     ├── fonts
     ├── images
     └── languages
 ├── helpers,  
     ├── global
     ├── localization
     ├── router
     ├── storage
     └── redux
 ├── components
 ├── constants
 ├── hooks
     ├── useTheme
     └── useThemedStyles
 ├── localization
     └── en 
 ├── firebase
 ├── providers
     ├── ThemeListener
     └── ThemeProvider
 ├── routers
 ├── screens
 ├── services
 ├── store
     └── rootReducer
 ├── styles
     ├── fonts
     ├── padding
     ├── theme
     └── typography
 └── utils
     └── Routes
```
<a id="Assets"></a>
# Assets

Assets used in the project.  
Sample: fonts, images, localization files, etc.

- **fonts/** – Custom font files
- **images/** – Static image assets (PNG, JPG, SVG, etc.)
- **languages/** – Language resource files for localization

---

<a id="Types"></a>
# @types

Custom TypeScript type declarations.

---

<a id="Helpers"></a>
# Helpers

Utility functions and logic helpers, grouped by domain.

- **global/** – General-purpose utilities
- **localization/** – Helpers for internationalization
- **router/** – Navigation logic and helpers
- **storage/** – AsyncStorage/local storage helpers
- **redux/** – Redux-specific utilities and actions

---

<a id="Components"></a>
# Components

Reusable React Native components (e.g., buttons, modals, inputs).

---

<a id="Constants"></a>
# Constants

Static configuration values like colors, spacing, dimensions, etc.

---

<a id="Hooks"></a>
# Hooks

Custom React hooks.

- **useTheme** – Theme context and access
- **useThemedStyles** – Hook to generate styles based on theme

---

<a id="Localization"></a>
# Localization

Language translation resources.

- **en** – English translation keys

---

<a id="Firebase"></a>
# Firebase

Firebase service configuration (e.g., auth, firestore, analytics).

---

<a id="Providers"></a>
# Providers

Global context providers.

- **ThemeListener** – Listens and responds to theme changes
- **ThemeProvider** – Theme context provider setup

---

<a id="Routers"></a>
# Routers

App navigation stacks and navigators setup.

---

<a id="Screens"></a>
# Screens

All app screens/views, organized by feature or flow.

---

<a id="Services"></a>
# Services

API service logic and network handling (e.g., REST, GraphQL).

---

<a id="Store"></a>
# Store

Redux store configuration and root reducer setup.

- **rootReducer** – Combines all reducers and store logic

---

<a id="Styles"></a>
# Styles

Design tokens and theme-specific style rules.

- **fonts** – Font styles
- **padding** – Spacing utilities
- **theme** – Light/dark theme variables
- **typography** – Text styles and hierarchy

---

<a id="Utils"></a>
# Utils

Helper functions and common logic.

- **Routes** – Route names and constants for navigation

<a id="Run"></a>
# Run in Dev Environment

- Setting up the development environment: https://reactnative.dev/docs/environment-setup.
- Install dependencies: `npx expo install` ( `yarn install` or `npm install`).
- Run on both Android & iOS: `npx expo start` (or `yarn start`).
- Run on Android: `yarn android` (or `npm run android`).
- Run on iOS: `yarn ios` (or `npm run ios`).
- Run on Test: `yarn test` (or `npm run test`).
- ✨ Don't forget to enable eslint ✨

<a id="Push"></a>
# Code Push

- expo-update documentation link : https://docs.expo.dev/workflow/publishing/
- Run on `eas update` 
- ✨ Don't forget to local expo-cli and node version check ✨


