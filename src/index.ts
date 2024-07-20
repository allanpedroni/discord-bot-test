// REF : 
// 1 - https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot
// 2 - https://www.youtube.com/watch?v=UEgYWgUHLF0&list=PL9tY_tDo_Q0CGZ2MYqW9ZK0OpLwqmRti0

import { Events } from "discord.js";
import { ExtendedClient } from "./structs/types/extendedclient";
import config from "./config.json";

export * from "colors";

const client = new ExtendedClient();

client.start();

client.once(Events.ClientReady, readyClient => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`.green);
});

// client.on(Events.MessageCreate, async interaction => {
//   if (interaction.author.bot) return;

//   if (interaction.content === 'ping') {
//     await interaction.reply({
//       content: 'Pong!'.blue,
//     });
//   }
// });

// client.on(Events.InteractionCreate, async interaction => {
//   if (!interaction.isChatInputCommand()) return;

//   if (interaction.commandName === 'ping') {
//     await interaction.reply('Pong!'.yellow);
//   }
// });

export { client, config };
