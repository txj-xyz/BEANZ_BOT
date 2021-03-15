
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

  client.user.setPresence({ activity: { name: 'for b!bean or b!invite', type: 'LISTENING' }
});
  // Get 500 beans on bot startup
  const google = new Scraper({
    puppeteer: {
      headless: true,
      isz: 'l'
    },
  });
  // get beans from google here
  const beanresults = await google.scrape('baked beans', 2000);
  // get beans memes from google as well.
  //const beanMemes = await google.scrape('baked bean memes', 500);
  // push beans to client.beans so we can call it in the bean co1mmand lat
  let beanArray = client.beans
  const checkForBeansLoaded = setInterval(() => {
    beanArray.length != 0 ? console.log("[INFO] BEANS LOADED") : null
    clearInterval(checkForBeansLoaded)
  }, 500);
  beanresults.forEach(r => {
    console.log('[INFO] Pushing bean:', r.url)
    beanArray.push(r.url)
  });
  //beanMemes.forEach(r => {
  //  console.log('[INFO] Pushing bean meme:', r.url)
  //  beanArray.push(r.url)
  //});
})();

