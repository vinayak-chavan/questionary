require('./db/connection');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();
const questionRoutes = require('./controller/question');

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;

app.use(express.json());

app.use('/questions', questionRoutes);

app.listen(port, () => {
    console.log(`connection is live at port ${port}`);
});