const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema(
  {
    name: { type: String },
    status: { type: String },
    isCompleted: { type: Boolean },
    description: { type: String },
    // label: { type: String },
    // members: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Issue", IssueSchema);
