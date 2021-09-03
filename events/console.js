module.exports = {
  name: "console",
  once: true,
  execute(client) {
    client.on("shardError", (error) => {
      console.error("A websocket connection encountered an error:", error);
    });
    process.on("unhandledRejection", (error) => {
      console.error("Unhandled promise rejection:", error);
    });
  },
};
