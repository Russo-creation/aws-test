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

import {globalTestFunction} from "../../jest/testGlobalFunctions"

async function applayHtpasswdCredenctials(page, user, pass){
  const auth = Buffer.from(`${user}:${pass}`).toString('base64');
  await page.setExtraHTTPHeaders({
    'Authorization': `Basic ${auth}`                    
  });
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
      console.log(process.env.REACT_APP_FRONTEND_URL);
      if(process.env.REACT_APP_HTPASSWD_USER && process.env.REACT_APP_HTPASSWD_PASSWORD){
        applayHtpasswdCredenctials(page, process.env.REACT_APP_HTPASSWD_USER, process.env.REACT_APP_HTPASSWD_PASSWORD);
      }
      
      await page.goto(`${process.env.REACT_APP_FRONTEND_URL}/`, { waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2'], timeout: 12000 });

      //write to input id="myinput" value Hello
      await page.type('#myinput', 'Hello');

      //fix issue with non loading font in .htpasswd server
//      await page.evaluate(() => { document.body.style.fontFamily = 'Dejavu Sans'; }); 

      await page.evaluateHandle('document.fonts.ready').then(async() => {
        //check if page title equals React App
        //await expect(page.title()).resolves.toMatch('React App');

        // await expect(page).toMatch('GraphQL');

        // await page.reload({waitUntil: 'networkidle0'});
        
        //add timeout for something
        // await page.waitForTimeout(1000).then(() => console.log('Waited a second!'));

        const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
        await page.setViewport({ width: 300, height: bodyHeight });
  
        const image = await page.screenshot({
        //  fullPage: true,
        });
        expect(image).toMatchImageSnapshot({
          customSnapshotsDir: "../__image_snapshots__/",
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