const asyncHandler = require("express-async-handler");

const Topic = require("../models/topicModel");

const addTopic = asyncHandler(async (req, res) => {
  if (!req.body.content) {
    res.status(400);
    throw new Error("Please add a text field");
  }

const count = await Topic.countDocuments({});
var isCurrent = false;
if (count === 0) {
  console.log("Topic collection is empty");
  isCurrent = true;
} else {
  console.log(`Topic collection has ${count} documents`);
}

  const topic = await Topic.create({
    content: req.body.content,
    isCurrent: isCurrent
  });

  res.status(200).json(topic);
});

const currentTopic = asyncHandler(async (req, res) => {

const topic = await Topic.findOne({isCurrent: true})
 const now = new Date();

 const midnight = new Date();
 midnight.setHours(24, 0, 0, 0); // set to midnight tonight
 const timeLeft = midnight - now + 75600000;
  console.log(timeLeft);
 const secondsLeft = Math.floor((timeLeft / 1000) % 60);
 const minutesLeft = Math.floor((timeLeft / 1000 / 60) % 60);
 const hoursLeft = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
console.log(
   `Time left for today's topic: ${hoursLeft} hours, ${minutesLeft} minutes, ${secondsLeft} seconds`
 );
  res.status(200).send({ topic: topic.content, timeleft:timeLeft});
});




module.exports = {addTopic, currentTopic}