const { Collection, Client, Intents, Discord } = require("discord.js");
const { get } = require("snekfetch");
const fs = require("fs");
//
// for he bot 24/7 online
//

//
//
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.commands = new Collection();
client.aliases = new Collection();

const { prefix, token } = require("./config.json");
//
//
//

//
//
//

//
//
//

client.categories = fs.readdirSync("./commands/");
["command"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

client.on("message", (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).trim().split("/ +/ ");
  const command = args.shift();
  try {
    command.execute(msg, args);
  } catch (error) {
    //...
  }

  try {
    client.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply(
      "*There* *was* *an* *error* *trying* *to* *execute* *that* *command!*"
    );
  }
});

client.on("message", (msg) => {
  if (msg.content == "ping") {
    client.commands.get("ping").execute(msg, args);
  } else if (msg.content == "pong") {
    client.commands.get("pong").execute(msg, args);
  } else if (msg.content == `meme`) {
    client.commands.get("meme").execute(msg, args);
  } else if (msg.content == ``) {
    client.commands.get("").execute(msg, args);
  } else if (msg.content == ``) {
    client.commands.get("").execute(msg, args);
  }
});

client.on("message", (msg) => {
  if (msg.attachments.size > 0) {
    //Make sure there are attachments at all
    var react = false; //Do we react to the message? Default to false

    msg.attachments.forEach((attachment) => {
      //Check each attachment to see if it's a jpg, png, or jpeg
      if (
        attachment.url.includes(".jpg") ||
        attachment.url.includes(".png") ||
        attachment.url.includes(".jpeg")
      ) {
        react = true; //It's an image! We want to react to the message
      }
    });

    if (react === true) {
      //React to the message
      msg.react("883268490063151136");
      msg.react("");
      msg.react("");
      msg.react("");
      msg.react("");
    }
  }
});
//
// to get the bot 24/7 online
//

//
//
//

//
//
//

client.login(token);
