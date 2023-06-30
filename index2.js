/*
 * @Author: Libra
 * @Date: 2023-04-25 18:42:15
 * @LastEditTime: 2023-04-25 18:50:38
 * @LastEditors: Libra
 * @Description: 
 */
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.
  const url = "https://evaluation.stac.fun/#/cerar?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlanBnIiwiZXhwIjoxNjgyNDkwMDc0LCJjbGFpbXMiOiJVVUlEIzY0NDc3MTA5MzViMjNkMDAxMjU5ZmIxZiM2MTMwYWMxMTBkZThlYTJlZjg3MGY1MzIjZjQ1MDQ5LHJfY2FuZGlkYXRlLCJ9.xRvlqt6yYghBCST-5wEFZ2uxz3LWHpTUpCyEbad4P_A1L9nTddczryTHosxExmPkNNtIm4c49-fdkssVa_rr_A"
  const page = await browser.newPage();
  // set mobile viewport size
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(url, {
      waitUntil: "networkidle",
      timeout: 600000
    });
    await page.screenshot({path: 'screen.png', fullPage: true});
})();

