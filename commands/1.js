const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://www.google.com/search?q=belle+delphine+photo+website&client=firefox-b-d&sxsrf=ALeKk03MR7u3m-3nzcSjrSzdBdlxWVQk7g:1595256563033&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiFiY_midzqAhWP_qQKHeyEAZQQ_AUoAXoECAwQAw&biw=1366&bih=626')
    .query({ type: 'swimsuit'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("🔞 | Este não é um canal de conteúdo adulto!")
  }
};
