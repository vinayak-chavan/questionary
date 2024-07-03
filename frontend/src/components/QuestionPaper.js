import React from 'react';
import './QuestionPaper.css'; // Import your CSS file

const QuestionPaper = ({ paper }) => {
  return (
    <div className="question-paper-container">
      <h2>Generated Question Paper</h2>
      <ul>
        {paper?.data?.questionPaper?.map((question) => (
          <li key={question._id}>
            <p><strong>Question:</strong> {question.question}</p>
            <p><strong>Subject:</strong> {question.subject}</p>
            <p><strong>Topic:</strong> {question.topic}</p>
            <p><strong>Difficulty:</strong> {question.difficulty}</p>
            <p><strong>Marks:</strong> {question.marks}</p>
          </li>
        ))}
      </ul>
      <p className="total-marks"><strong>Total Marks:</strong> {paper?.data?.totalMarks}</p>
    </div>
  );
};

export default QuestionPaper;
