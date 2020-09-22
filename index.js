const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

const launchChromeAndRunLighthouse = url => {
  return chromeLauncher.launch().then(chrome => {
    const opts = {
      port: chrome.port
    };
    return lighthouse(url, opts).then(results => {
      return chrome.kill().then(() => results.report);
    });
  });
};

launchChromeAndRunLighthouse("https://www.lukeharrison.dev").then(results => {
  console.log(results);
});