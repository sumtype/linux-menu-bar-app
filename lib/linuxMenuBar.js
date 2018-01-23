'use strict'

const path = require('path')
const events = require('events')

const extend = require('extend')
const Positioner = require('electron-positioner')
let {app, Tray, Menu, BrowserWindow} = require('electron')

module.exports = function create (options = {}) {
  let appReady = () => {
    let display = () => { lmb.window && lmb.window.isVisible() ? lmb.hideWindow() : lmb.showWindow() }
    let quit = () => { app.quit() }
    let createWindow = () => {
      lmb.emit('window-create')
      let defaults = { show: false, frame: false }
      let windowOptions = extend(defaults, options)
      lmb.window = new BrowserWindow(windowOptions)
      lmb.positioner = new Positioner(lmb.window)
      lmb.window.on('blur', () => { lmb.hideWindow() })
      lmb.window.on('close', () => {
        lmb.emit('window-destroy')
        delete lmb.window
        lmb.emit('window-destroyed')
      })
      lmb.window.loadURL(path.join('file://', __dirname, '..', 'app', 'deployment', 'index.html'))
      lmb.emit('window-created')
    }
    lmb.showWindow = () => {
      if (!lmb.window) createWindow()
      lmb.tray.setContextMenu(Menu.buildFromTemplate([{label: 'Close', type: 'normal', click: display}, {label: 'Quit', type: 'normal', click: quit}]))
      let {x, y} = lmb.positioner.calculate('center', { x: 0, y: 0, width: 0, height: 0 })
      lmb.window.setPosition(x, y)
      lmb.emit('show')
      lmb.window.show()
      lmb.emit('shown')
    }
    lmb.hideWindow = () => {
      if (lmb.window) {
        lmb.emit('hide')
        lmb.tray.setContextMenu(Menu.buildFromTemplate([{label: 'Open', type: 'normal', click: display}, {label: 'Quit', type: 'normal', click: quit}]))
        lmb.window.hide()
        lmb.emit('hidden')
      }
    }
    lmb.tray = new Tray(path.join(__dirname, '..', 'images', 'icon.png'))
    lmb.tray.setContextMenu(Menu.buildFromTemplate([{label: 'Open', type: 'normal', click: display}, {label: 'Quit', type: 'normal', click: quit}]))
    lmb.emit('ready')
  }
  options.width = options.width || 400
  options.height = options.height || 400
  app.on('ready', appReady)
  let lmb = new events.EventEmitter()
  lmb.app = app
  return lmb
}
