const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const data = require("./MOCK_DATA.json");

const getRandomNameForGender = (genderString) => {
  let gender;
  let randomNumber;
  do {
    randomNumber = Math.round(Math.random() * data.length);
    gender = data[randomNumber].gender.toLowerCase();
    firstName = data[randomNumber].first_name.toLowerCase();
    lastName = data[randomNumber].last_name.toLowerCase();
  } while (gender !== genderString.toLowerCase());
  return data[randomNumber];
};

app.get("/random-name/:gender", (req, res) => {
  const gender = req.params.gender;
  let randomName;
  if (gender === "male") {
    randomName = getRandomNameForGender("male");
  } else if (gender === "female") {
    randomName = getRandomNameForGender("female");
  }

  randomName
    ? res.status(200).send(randomName)
    : res.status(400).send("An error occured ...");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
