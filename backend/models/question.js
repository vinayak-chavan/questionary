const mongoose = require("mongoose");
const schema = mongoose.Schema;

const questionSchema = new schema({
  question: { 
    type: String, 
    required: true 
  },
  subject: { 
    type: String, 
    required: true 
  },
  topic: { 
    type: String, 
    required: true 
  },
  difficulty: { 
    type: String, 
    required: true, 
    enum: ["Easy", "Medium", "Hard"] 
  },
  marks: { 
    type: Number, 
    required: true 
  }
});

const question = mongoose.model("question", questionSchema);

module.exports = question;