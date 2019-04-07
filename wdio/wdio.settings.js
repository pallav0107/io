const basePort = 3000;
exports.config = {
    seleniumGrid: {
      host: "10.31.138.8",
      port: 3789,
      // This is the url and port for story book web host
      baseUrl: `http://10.35.55.9:${basePort}`,
      e2eImageFolderRef: "grid_reference",
      e2eImageFolderScreen: "grid_screen",
      e2eImageFolderDiff: "grid_diff"
    },
    local: {
      host: "localhost",
      port: 4444,
      baseUrl: `http://localhost:${basePort}`,
      e2eImageFolderRef: "local_reference",
      e2eImageFolderScreen: "local_screen",
      e2eImageFolderDiff: "local_diff"
    },
    vm: {
      host: "192.168.56.2",
      port: 4444,
      baseUrl: `http://192.168.56.1:${basePort}`,
      e2eImageFolderRef: "vm_reference",
      e2eImageFolderScreen: "vm_screen",
      e2eImageFolderDiff: "vm_diff"
    }
  };