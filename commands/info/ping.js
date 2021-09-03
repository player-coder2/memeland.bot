module.exports = {
  name: "ping",
  discription: "description",
  execute(message, args) {
    message.channel.send(
      `🏓 | Latency is: **${Date.now() - message.createdTimestamp}ms.**`
    );
  },
};
