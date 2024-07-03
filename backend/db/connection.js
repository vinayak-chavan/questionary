const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/questionary?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
mongoose.set('strictQuery', false);

(async () => {
  try {
    await mongoose.connect(url);
    console.log("✔ Successfully connected to mongodb database");
  } catch (e) {
    console.log(`connection error ${e}`);
  }
})();

const db = mongoose.connection;

db.on("error", () => {
  console.log(`connection error while connection at ${url}`);
});
