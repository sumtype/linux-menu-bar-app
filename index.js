'use strict'

const path = require('path')

const lmb = require(path.join(__dirname, 'lib', 'linuxMenuBar'))()

lmb.on('ready', () => console.log('ready'))
lmb.on('window-create', () => console.log('window-create'))
lmb.on('window-created', () => console.log('window-created'))
lmb.on('window-destroy', () => console.log('window-destroy'))
lmb.on('window-destroyed', () => console.log('window-destroyed'))
lmb.on('show', () => console.log('show'))
lmb.on('shown', () => console.log('shown'))
lmb.on('hide', () => console.log('hide'))
lmb.on('hidden', () => console.log('hidden'))
