const port = process.env.TEST_SERVER_PORT
  ? Number(process.env.TEST_SERVER_PORT)
  : 4444

process.env.TEST_SERVER_PORT = port

module.exports = {
  launch: {
    //visible browser
    // headless: process.env.CI === 'true',
    //hidden browser
    headless: process.env.HEADLESS !== 'false',
  },
  browser: 'chromium',
  browserContext: process.env.INCOGNITO ? 'incognito' : 'default',
  server: {
    command: `cross-env PORT=${port} node server`,
    port,
    launchTimeout: 8000,
  },
}