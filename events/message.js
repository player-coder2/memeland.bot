//
//
//  message-old geen iedee wat het doet \-/
//
//
module.exports = {
  name: "message-error",
  once: true,
  execute(client) {
    if (message.partial) {
      console.log("The message is partial.");
    } else {
      console.log("The message is not partial.");
    }
  },
};
