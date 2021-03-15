const BaseCommand = require('../utils/structures/BaseCommand');
const { MessageAttachment } = require('discord.js')

module.exports = class WhoAmICommand extends BaseCommand {
  constructor() {
    super('whoami', 'Post my real face', []);
  }

  async run(client, message, args) {
    
    (async () => {
      message.channel.send('ItZ Me BeAnZ', new MessageAttachment('https://i.txj69.xyz/gay.png'))

    })();
  }
}