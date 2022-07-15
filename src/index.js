const express = require("express");
const React = require("react");
// to get the named and default export the 'require' way
const renderToString = require("react-dom/server").renderToString;
const Home = require("./client/components/Home.jsx").default;

const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
