require('dotenv').config(); 

module.exports = {
  verbose: true,
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['./setupTests.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.css$': 'jest-transform-css',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-file'
  }
};