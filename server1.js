const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Response from Server 1");
});

app.listen(port, () => {
  console.log(`Server 1 is running on port ${port}`);
});
