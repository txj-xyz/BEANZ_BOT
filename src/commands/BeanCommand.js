const BaseCommand = require('../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('bean', 'Post Beanz photos', []);
  }

  async run(client, message, args) {
    
    (async () => {
      if(client.beans.length == 0) return message.channel.send('**The bean cannon is not ready yet**')
      const getRandomBeanfromGoogle = client.beans[Math.floor(Math.random() * client.beans.length)]
      //Log beans to channel
      console.log(`[INFO] Getting random Bean ${getRandomBeanfromGoogle}`)
      //log beans to discord channel
      message.channel.send(getRandomBeanfromGoogle)
    })();
  }
}