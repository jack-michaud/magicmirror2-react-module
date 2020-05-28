# React MagicMirror^2 Module

A small demo of a module written in React.

![Demo](https://github.com/jack-michaud/magicmirror2-react-module/raw/master/docs/demo.gif)

## Features
- 🔥 Hot Module Reloading (HMR)
- 🗲 JSX rendering with Babel and Webpack
- ⚓ Standalone mode (build your plugin for release without worrying about running webpack dev server)

## Why?

Instead of re-writing [MagicMirror^2](https://github.com/MichMich/MagicMirror) in React,
it made my sense to me to hook into the existing module system and write a react module.

# Forking for development

```bash
# Navigate to the magic mirror directory
cd /path/to/magicmirror/

# Go into modules and clone this repo
cd modules
git clone https://github.com/jack-michaud/magicmirror2-react-module.git
mv magicmirror2-react-module whateveryoulike

```

```javascript
// config/config.js

var config = {
  // ...
  modules: [
    // ...
    {
      module: 'whateveryoulike',
      position: 'bottom_bar'
    },
    // ...
  ]
};
```

Start the magic mirror. *Make sure that navigating to `http://localhost:8000` 
shows the mirror UI.*

Then, from another terminal, start running the webpack development server for
the module.

```bash
cd /path/to/module
yarn install
yarn dev
```

This should open the MagicMirror UI in your browser, served from the webpack dev 
server.

Making changes to the component file should show up immediately.


# Building

Be sure to read the previous section for setup instructions.

Outside of development, you can build the component and it will 
load directly from the electron app without the need for the dev server.

```
yarn build
```

This creates a javascript file named after the module's folder name. Once 
you've done this, the module is standalone.



