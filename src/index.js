
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const Scraper = require('images-scraper');
const client = new Client();


(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  client.beans = new Array;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);

  // Get 500 beans on bot startup
  const google = new Scraper({
    puppeteer: {
      headless: true,
      isz: 'l'
    },
  });
  // get beans from google here
  const results = await google.scrape('baked beans', 500);
  // push beans to client.beans so we can call it in the bean co1mmand lat
  let beanArray = client.beans
  const checkForBeansLoaded = setInterval(() => {
    beanArray.length != 0 ? console.log("[INFO] BEANS LOADED") : null
    clearInterval(checkForBeansLoaded)
  }, 500);
  results.forEach(r => beanArray.push(r.url));
})();

