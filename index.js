import express from "express";
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("Running!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
