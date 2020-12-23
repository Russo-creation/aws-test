require('dotenv').config({ path: './'+process.env.ENV_PATH }); 

module.exports = {
  verbose: true,
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['./jest/setupTests.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.css$': 'jest-transform-css',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-file'
  }
};