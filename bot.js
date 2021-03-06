var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as:');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
        if (message.substring(0, 1) == '!') {
            var args = message.substring(1).split(' ');
            var cmd = args[0];

            args = args.splice(1);
            switch (cmd) {
                //!Trilliax
                case '!ping':
                    bot.sendMessage({
                        to: channelID,
                        message: 'The master has returned!'
                    });
            break;
            //Add case commands
        }

    }

});

bot.on('message', function (user, userID, channelID, message, evt) {
        if (message.substring(0, 1) == '!') {
            var args = message.substring(1).split(' ');
            var cmd = args[0];

            args = args.splice(1);
            switch (cmd) {
                //!Trilliax
                case '!cake':
                    bot.sendMessage({
                        to: channelID,
                        message: 'Have a bite master I know its your favorite'
                    });
            break;
            //Add case commands
        }

    }

});

client.login(process.env.BOT_TOKEN);
