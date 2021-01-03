const puppeteer = require("puppeteer");

const base_url = `https://twitter.com/`;

const twitter = {
  browser: null,
  page: null,

  initialize: async () => {
    twitter.browser = await puppeteer.launch({
      headless: false,
    });

    twitter.page = await twitter.browser.newPage();

    await twitter.page.goto(base_url, { waitUntil: "networkidle2" });
  },
};

module.exports = twitter;
