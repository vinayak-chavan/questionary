const express = require("express");
const route = express.Router();
const question = require('../models/question');
const { successResponse, errorResponse } = require('../utils');

route.post('/generate', async (req, res) => {
	try {
    const { totalMarks, difficultyDistribution } = req.body;

    const easyMarks = (totalMarks * difficultyDistribution.easy) / 100;
    const mediumMarks = (totalMarks * difficultyDistribution.medium) / 100;
    const hardMarks = (totalMarks * difficultyDistribution.hard) / 100;

    const easyQuestions = await getQuestions("Easy", easyMarks);
    const mediumQuestions = await getQuestions("Medium", mediumMarks);
    const hardQuestions = await getQuestions("Hard", hardMarks);

    const questionPaper = [
      ...easyQuestions,
      ...mediumQuestions,
      ...hardQuestions
    ];

    return successResponse(req, res, { questionPaper, totalMarks }, 200);
  } catch (error) {
    return errorResponse(req, res, "Error generating question paper", 500);
  }
});

const getQuestions = async (difficulty, marksNeeded) => {
  const questions = await question.find({ difficulty }).sort({ marks: 1 });
  shuffleArray(questions);
  const selectedQuestions = [];
  let totalMarks = 0;

  for (const question of questions) {
    if (totalMarks + question.marks <= marksNeeded) {
      selectedQuestions.push(question);
      totalMarks += question.marks;
    }
    if (totalMarks === marksNeeded) break;
  }
  return selectedQuestions;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

module.exports = route;