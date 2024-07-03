const mongoose = require("mongoose");
const question = require("./models/question");

require('./db/connection');

const questions = [
  { question: "What is the speed of light?", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 2 },
  { question: "Define Newton's second law of motion.", subject: "Physics", topic: "Mechanics", difficulty: "Medium", marks: 3 },
  { question: "What is the chemical formula for water?", subject: "Chemistry", topic: "Basics", difficulty: "Easy", marks: 2 },
  { question: "Explain the theory of relativity.", subject: "Physics", topic: "Relativity", difficulty: "Hard", marks: 5 },
  { question: "What is photosynthesis?", subject: "Biology", topic: "Plants", difficulty: "Easy", marks: 2 },
  { question: "Describe the process of mitosis.", subject: "Biology", topic: "Cell Division", difficulty: "Medium", marks: 3 },
  { question: "What is the pH scale?", subject: "Chemistry", topic: "Acids and Bases", difficulty: "Medium", marks: 3 },
  { question: "Explain the difference between ionic and covalent bonds.", subject: "Chemistry", topic: "Bonding", difficulty: "Medium", marks: 5 },
  { question: "What are the main functions of the human digestive system?", subject: "Biology", topic: "Human Body", difficulty: "Hard", marks: 2 },
  { question: "Describe the structure of DNA.", subject: "Biology", topic: "Genetics", difficulty: "Hard", marks: 5 },
  { question: "What is Avogadro's number?", subject: "Chemistry", topic: "Mole Concept", difficulty: "Medium", marks: 2 },
  { question: "Explain the laws of thermodynamics.", subject: "Physics", topic: "Thermodynamics", difficulty: "Hard", marks: 5 },
  { question: "What is the process of osmosis?", subject: "Biology", topic: "Cell Biology", difficulty: "Easy", marks: 3 },
  { question: "What is a chemical reaction?", subject: "Chemistry", topic: "Basics", difficulty: "Hard", marks: 2 },
  { question: "Describe the properties of acids and bases.", subject: "Chemistry", topic: "Acids and Bases", difficulty: "Medium", marks: 3 },
  { question: "What is the law of conservation of mass?", subject: "Physics", topic: "Classical Mechanics", difficulty: "Medium", marks: 4 },
  { question: "Explain the process of evaporation.", subject: "Physics", topic: "Thermodynamics", difficulty: "Easy", marks: 2 },
  { question: "What are enzymes?", subject: "Biology", topic: "Biochemistry", difficulty: "Medium", marks: 3 },
  { question: "What is the periodic table?", subject: "Chemistry", topic: "Basics", difficulty: "Easy", marks: 2 },
  { question: "Describe the greenhouse effect.", subject: "Physics", topic: "Environmental Science", difficulty: "Hard", marks: 5 },
  { question: "What is the process of photosynthesis?", subject: "Biology", topic: "Plants", difficulty: "Hard", marks: 2 },
  { question: "Explain the function of the heart.", subject: "Biology", topic: "Human Body", difficulty: "Medium", marks: 5 },
  { question: "What are Newton's laws of motion?", subject: "Physics", topic: "Mechanics", difficulty: "Easy", marks: 5 },
  { question: "What is the chemical formula for carbon dioxide?", subject: "Chemistry", topic: "Basics", difficulty: "Easy", marks: 3 },
  { question: "Describe the process of photosynthesis in plants.", subject: "Biology", topic: "Plants", difficulty: "Easy", marks: 2 },
  { question: "What is the speed of sound?", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 },
  { question: "Define Ohm's Law.", subject: "Physics", topic: "Electricity", difficulty: "Hard", marks: 3 },
  { question: "What are the three states of matter?", subject: "Chemistry", topic: "Basics", difficulty: "Hard", marks: 2 },
  { question: "Explain the process of diffusion.", subject: "Biology", topic: "Cell Biology", difficulty: "Easy", marks: 3 },
  { question: "What is the function of the mitochondria?", subject: "Biology", topic: "Cell Biology", difficulty: "Medium", marks: 2 },
  { question: "Describe the pH scale and its importance.", subject: "Chemistry", topic: "Acids and Bases", difficulty: "Medium", marks: 5 },
  { question: "What is the law of reflection?", subject: "Physics", topic: "Optics", difficulty: "Easy", marks: 2 },
  { question: "Explain the structure of an atom.", subject: "Chemistry", topic: "Atomic Structure", difficulty: "Medium", marks: 2 },
  { question: "What are the functions of the human skeletal system?", subject: "Biology", topic: "Human Body", difficulty: "Medium", marks: 3 },
  { question: "Describe the water cycle.", subject: "Geography", topic: "Hydrology", difficulty: "Hard", marks: 3 },
  { question: "What is global warming?", subject: "Environmental Science", topic: "Climate Change", difficulty: "Medium", marks: 5 },
  { question: "Explain the rock cycle.", subject: "Geology", topic: "Earth Science", difficulty: "Medium", marks: 2 },
  { question: "What are renewable energy sources?", subject: "Environmental Science", topic: "Energy", difficulty: "Easy", marks: 2 },
  { question: "Describe the life cycle of a star.", subject: "Astronomy", topic: "Stars", difficulty: "Hard", marks: 5 },
  { question: "What are the main parts of a plant?", subject: "Biology", topic: "Plants", difficulty: "Medium", marks: 3 },
  { question: "Explain the concept of supply and demand.", subject: "Economics", topic: "Market Forces", difficulty: "Medium", marks: 3 },
  { question: "What is the boiling point of water?", subject: "Physics", topic: "Thermodynamics", difficulty: "Easy", marks: 1 },
  { question: "Name the gas used in balloons.", subject: "Chemistry", topic: "Basics", difficulty: "Easy", marks: 1 },
  { question: "What is the symbol for gold?", subject: "Chemistry", topic: "Elements", difficulty: "Easy", marks: 1 },
  { question: "What is the powerhouse of the cell?", subject: "Biology", topic: "Cell Biology", difficulty: "Easy", marks: 1 },
  { question: "What planet is known as the Red Planet?", subject: "Astronomy", topic: "Planets", difficulty: "Medium", marks: 1 },
  { question: "What is the process by which plants make their food?", subject: "Biology", topic: "Plants", difficulty: "Easy", marks: 1 },
  { question: "What is the formula for calculating speed?", subject: "Physics", topic: "Mechanics", difficulty: "Medium", marks: 1 },
  { question: "What is the most abundant gas in Earth's atmosphere?", subject: "Environmental Science", topic: "Atmosphere", difficulty: "Medium", marks: 1 },
  { question: "What is H2O commonly known as?", subject: "Chemistry", topic: "Basics", difficulty: "Medium", marks: 1 },
  { question: "What is the freezing point of water?", subject: "Physics", topic: "Thermodynamics", difficulty: "Medium", marks: 1 },
  { question: "Name the largest organ in the human body.", subject: "Biology", topic: "Human Body", difficulty: "Medium", marks: 1 },
  { question: "What do bees produce?", subject: "Biology", topic: "Insects", difficulty: "Hard", marks: 1 },
  { question: "What is the chemical symbol for oxygen?", subject: "Chemistry", topic: "Elements", difficulty: "Hard", marks: 1 },
  { question: "How many continents are there on Earth?", subject: "Geography", topic: "Basics", difficulty: "Hard", marks: 1 },
  { question: "What is the main gas found in the air we breathe?", subject: "Environmental Science", topic: "Atmosphere", difficulty: "Hard", marks: 1 },
  { question: "Name the smallest bone in the human body.", subject: "Biology", topic: "Human Body", difficulty: "Hard", marks: 1 },
  { question: "What is the primary language spoken in Brazil?", subject: "Geography", topic: "Countries", difficulty: "Hard", marks: 1 },
];

const seedDB = async () => {
  try {
    await question.deleteMany({});
    await question.insertMany(questions);
    console.log("Questions seeded successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
