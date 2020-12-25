import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { setDefaultOptions } from 'jsdom-screenshot';


// add some helpful assertions
//import "jest-dom/extend-expect";

// clean up after each test
//import "react-testing-library/cleanup-after-each";

// Docker requires --no-sandbox to be able to run the tests
setDefaultOptions({
  launch: {
    headless: true,
    args: ['--app', '--no-sandbox', '--font-render-hinting=medium', '--enable-font-antialiasing=false',]
  }
});

// Make sure jest has enough time to capture the screenshots
jest.setTimeout(15000);

expect.extend({ toMatchImageSnapshot });