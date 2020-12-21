// import React from 'react';
// import { generateImage } from 'jsdom-screenshot';
// import { render } from '@testing-library/react';
// import App from './App';

// it('has no visual regressions', async () => {
//   render(<App />);
//   const screenshot = await generateImage();
//   expect(screenshot).toMatchImageSnapshot({
//     failureThreshold: 0.005,
//     failureThresholdType: 'percent'
//   });
// });

import puppeteer from 'puppeteer';

import {globalTestFunction} from "../../testGlobalFunctions"

function sleep(millisecondsCount) {
    if (!millisecondsCount) {
        return;
    }
    return new Promise(resolve => setTimeout(resolve, millisecondsCount)).catch();
}

describe('image-snapshot', () => {
  globalTestFunction();

  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    page.setViewport({ width: 300, height: 768 });
  });

  afterAll(async () => {
    await browser.close();
  });

  it('visual regression test', async done => {
    try {
      await page.goto(`${process.env.REACT_APP_FRONTEND_URL}/`, { waitUntil: ['load', 'domcontentloaded', 'networkidle2'], timeout: 12000 });

      await page.evaluateHandle('document.fonts.ready').then(async() => {

        //write to input id="myinput" value Hello
        await page.type('#myinput', 'Hello');

        //check if page title equals React App
        //await expect(page.title()).resolves.toMatch('React App');

        // await expect(page).toMatch('GraphQL');

        // await page.reload({waitUntil: 'networkidle0'});
        
        //add timeout for something
        // await page.waitForTimeout(1000).then(() => console.log('Waited a second!'));

        const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
        await page.setViewport({ width: 300, height: bodyHeight });
  
        const image = await page.screenshot({
          //fullPage: true,
        });
        expect(image).toMatchImageSnapshot({
          customSnapshotsDir: "./__image_snapshots__/",
          customSnapshotIdentifier: 'customSnapshotName',
          //  customDiffDir: "./__image_snapshots__/",
          failureThreshold: 0.005,
          failureThresholdType: 'percent'
        });
  
        done();

      });
    } catch (err) {
      console.log(err);
    }
  });
});