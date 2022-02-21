const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api", (req, res) => {
  res.json([
    {
      sitename: "Bancal",
      windspeed: "7.1",
      temperature: "17",
      activepower: "6.3",
      maxpower: "21",
      turbineevents: {
        ST: "0",
        WA: "0",
        AV: "0",
        NC: "0",
      },
    },
    {
      sitename: "Bancal",
      windspeed: "7.1",
      temperature: "17",
      activepower: "6.3",
      maxpower: "21",
      turbineevents: {
        ST: "0",
        WA: "0",
        AV: "0",
        NC: "0",
      },
    },
    {
      sitename: "Bancal",
      windspeed: "7.1",
      temperature: "17",
      activepower: "6.3",
      maxpower: "21",
      turbineevents: {
        ST: "0",
        WA: "0",
        AV: "0",
        NC: "0",
      },
    },
    {
      sitename: "Bancal",
      windspeed: "7.1",
      temperature: "17",
      activepower: "6.3",
      maxpower: "21",
      turbineevents: {
        ST: "0",
        WA: "0",
        AV: "0",
        NC: "0",
      },
    },
    {
      sitename: "Bancal",
      windspeed: "7.1",
      temperature: "17",
      activepower: "6.3",
      maxpower: "21",
      turbineevents: {
        ST: "0",
        WA: "0",
        AV: "0",
        NC: "0",
      },
    },
    {
      sitename: "Bancal",
      windspeed: "7.1",
      temperature: "17",
      activepower: "6.3",
      maxpower: "21",
      turbineevents: {
        ST: "0",
        WA: "0",
        AV: "0",
        NC: "0",
      },
    },
    {
      "sitename": "Bancal",
      "windspeed": "7.1",
      "temperature": "17",
      "activepower": "6.3",
      "maxpower": "21",
      "turbineevents": {
        "ST": "0",
        "WA" : "0",
        "AV" : "0",
        "NC": "0"
      }
    },
    {
      "sitename": "Bancal",
      "windspeed": "7.1",
      "temperature": "17",
      "activepower": "6.3",
      "maxpower": "21",
      "turbineevents": {
        "ST": "0",
        "WA" : "0",
        "AV" : "0",
        "NC": "0"
      }
    },
    {
      "sitename": "Bancal",
      "windspeed": "7.1",
      "temperature": "17",
      "activepower": "6.3",
      "maxpower": "21",
      "turbineevents": {
        "ST": "0",
        "WA" : "0",
        "AV" : "0",
        "NC": "0"
      }
    }
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
