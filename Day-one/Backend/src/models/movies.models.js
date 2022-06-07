const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;
