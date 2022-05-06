const mongoose = require("mongoose");

const FlexLocationSchema = new mongoose.Schema({
  Location: String,
  Is_Available: Boolean,
});

const RoomLocationSchema = new mongoose.Schema({
  Block: String,
  Room_Number: Number,
  Is_Available: Boolean,
});

const RoomLocation = mongoose.model("Rooms", RoomLocationSchema);
const FlexLocation = mongoose.model("Flex Locations", FlexLocationSchema);

module.exports = { RoomLocation, FlexLocation };
