require('dotenv').config()
const { app, BrowserWindow } = require('electron');
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile(path.join(__dirname, `./dist/index.html`));

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

console.log(app);

app.on('ready', ()=>{
  createWindow();

  app.on('activate', function () {
    if (mainWindow === null) createWindow();
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})
  

