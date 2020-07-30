'use strict'

import { app, BrowserWindow } from 'electron'
import path from 'path'
import '../renderer/store' // 如果启用了createSharedMutations()插件，则需要在主进程中创建store的实例。

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\')
}

// const isMac = process.platform === 'darwin'

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

// let baseIcon = nativeImage.createFromPath(path.join(__static, '/icon.jpg'))

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    title: 'Writee',
    // transparent: true, // 透明
    titleBarStyle: 'hidden', // 无工具栏，但是有红绿灯，hidden边距小，hiddenInset边距大
    // frame: false, // 无边框、工具栏
    backgroundColor: '#2e2e2e',
    resizable: process.env.NODE_ENV === 'development',
    // alwaysOnTop: true, // 永远置顶
    useContentSize: true,
    // show: false,
    width: 1024,
    height: 768,
    minWidth: 333,
    minHeight: 222,
    webPreferences: {
      // experimentalFeatures: true, // 开启chrome试验功能
      nodeIntegration: true // 在网页中集成Node
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

// ==========ipc事件定义==========
// 刷新系统菜单
// ipcMain.on('refresh-app-menu', (event, args) => {
//   createMenu(args)
// })
// 选择目录，打开工作空间
// ipcMain.on('show-open', (event, args) => {
//   showOpen()
// })
// 打开指定工作空间
// ipcMain.on('open-workspace', (event, args) => {
//   openMainWindow()
//   global.sharedObject.workspace = args
// })
// 打开welcome页面
// ipcMain.on('open-welcome-window', (event, args) => {
//   openWelcomeWindow()
// })
// 打开主页面
// ipcMain.on('open-main-window', (event, args) => {
//   openMainWindow()
// })
// ==========ipc事件定义==========

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
