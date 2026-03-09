const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 320,
    height: 580,
    frame: false,
    transparent: false,
    backgroundColor: '#F5F2EC',
    hasShadow: false,
    alwaysOnTop: true,
    resizable: false,
    movable: true,
    icon: path.join(__dirname, 'assets/nuntio.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false
    }
  })
  win.loadFile(path.join(__dirname, 'dist/index.html'))

  ipcMain.on('drag-window', (event, { mouseX, mouseY }) => {
    const [winX, winY] = win.getPosition()
    win.setPosition(winX + mouseX, winY + mouseY)
  })
}

app.whenReady().then(createWindow)