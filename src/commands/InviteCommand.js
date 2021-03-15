const BaseCommand = require('../utils/structures/BaseCommand');

module.exports = class InviteCommand extends BaseCommand {
  constructor() {
    super('invite', '', []);
  }

  run(client, message, args) {
    message.channel.send('Feel like inviting me?\nhttps://discord.com/api/oauth2/authorize?client_id=813160194930376756&permissions=52224&scope=bot');
  }
}
