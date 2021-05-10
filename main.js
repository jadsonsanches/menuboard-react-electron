const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// if (require("electron-squirrel-startup")) {
//   app.quit();
// }

const createWindow = () => {
  const displays = screen.getAllDisplays();
  const totalWidth = displays.reduce(
    (total, display) => total + display.size.width,
    0
  );

  const mainWindow = new BrowserWindow({
    x: 0,
    y: 0,
    height: 1080,
    minHeight: 1080,
    maxHeight: 1080,
    width: totalWidth,
    minWidth: totalWidth,
    enableLargerThanScreen: true,
    fullscreen: true,
    alwaysOnTop: true,
    frame: false,
    transparent: true,
  });

  //mainWindow.loadFile(path.join(__dirname, "menuboard/index.html"));
  mainWindow.loadURL("http://localhost:3000");
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });

// app.on("activate", () => {
//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });
