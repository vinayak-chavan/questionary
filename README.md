# Question Paper Generator

This is a Question Paper Generator application built with Node.js, Express, MongoDB, and React. The application allows users to generate a question paper based on specified total marks and difficulty distribution (easy, medium, and hard).

## Features

- Generate question papers based on user-specified total marks and difficulty distribution.
- View the generated question paper with questions from different subjects and topics.
- Store and manage questions in MongoDB.

## Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher)
- MongoDB (version 4.x or higher)

## Installation

1. Clone the repository:

   git clone https://github.com/vinayak-chavan/questionary.git
   cd questionary

2. Install server-side dependencies:
   
cd backend
npm install

3. Install client-side dependencies:

cd ../frontend
npm install

## Running the Application

1. Seed the database with initial questions :

cd server
node seed.js

2. Start the server:

cd backend
npm start

3. Start the client:

cd ../frontend
npm start

4. Open your web browser and navigate to http://localhost:3000 to view the application.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- React
- Axios
