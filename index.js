const server = require("./server.js");

const port = process.env.PORT || 5001;

server.listen(port, () => {
  console.log(`Aye Capn. Listening on port ${port}...`);
});
