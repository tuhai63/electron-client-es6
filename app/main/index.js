'use strict';

var app = require('electron').app;
var ipc = require('electron').ipcMain;
var BrowserWindow = require('electron').BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function () {
    app.quit();
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 850,
        show: false
    });

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    
    // mainWindow.openDevTools();
    
    mainWindow.loadURL('file://' + __dirname + '/../browser/index.html');
    mainWindow.webContents.on('did-finish-load', function () {
        // mainWindow.setTitle(app.getName());
        mainWindow.setTitle("Electron Client");
    });
    mainWindow.show();
});