const app = require("./server/server");

//app listen on port 4008

app.listen(4008, (err) => {
  if (err) throw err;
  console.log("Server is up!");
});
