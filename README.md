# Linux Menu Bar Application Template

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Simple Linux menu bar application template.  The template provides an application with a drop down system tray menu.  The menu has two options, one to open a centered Electron application window, the other to quit the application.  The "Open" option in the system tray drop down menu changes to "Close" when the Electron application window is open.

Thanks to [maxogden/menubar](https://github.com/maxogden/menubar) from which this repository was derived.

### Linux Menu Bar Commands

#### `npm start`

Starts the Linux menu bar application.  Please note, you'll need Electron installed for this command to run properly.  You can do so by installing it via [NPM](https://npmjs.org):

`npm i -g electron`

#### `npm stop`

Kills all your Electron processes running from inside your "linux-menu-bar-app" directory.

#### `npm run build`

Exports your menu bar application as a Linux application (by default builds for a 64-bit architecture).

### Linux Menu Bar Optional Parameters

The application accepts two options, width and height, which specify the dimensions of the Electron application window.  They're given as properties of an object passed to the constructor.  Here is an example:

(index.js)

`const lmb = require(path.join(__dirname, 'lib', 'linuxMenuBar'))({ width: 500, height:500 })`

### Linux Menu Bar Events

The menu bar application has events which are triggered during various application state transitions.

#### `ready`

Triggered when the application has initialized.

#### `window-create`

Triggered when the Electron application's window creation process begins.

#### `window-created`

Triggered when the Electron application's window has been created.

#### `window-destroy`

Triggered when the Electron application's window destruction process begins.

#### `window-destroyed`

Triggered when the Electron application's window has been destroyed.

#### `show`

Triggered when the Electron application's window display process begins.

#### `shown`

Triggered when the Electron application's window has been displayed.

#### `hide`

Triggered when the Electron application's window hiding process begins.

#### `hidden`

Triggered when the Electron application's window has been hidden.
