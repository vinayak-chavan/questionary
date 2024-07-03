import React, { useState } from 'react';
import axios from 'axios';
import './QuestionPaperForm.css';

const QuestionPaperForm = ({ onGeneratePaper }) => {
  const [totalMarks, setTotalMarks] = useState('');
  const [difficultyDistribution, setDifficultyDistribution] = useState({
    easy: '',
    medium: '',
    hard: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { easy, medium, hard } = difficultyDistribution;
    const sum = parseFloat(easy) + parseFloat(medium) + parseFloat(hard);

    if (sum !== 100) {
      alert('The sum of the difficulty percentages must equal 100%.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/questions/generate', {
        totalMarks,
        difficultyDistribution
      });

      onGeneratePaper(response.data);
    } catch (error) {
      console.error('Error generating question paper:', error);
      alert('Failed to generate question paper.');
    }
  };

  return (
    <div className="form-container">
      <h2>Generate Question Paper</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Total Marks:</label>
          <input
            type="number"
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Easy (%):</label>
          <input
            type="number"
            value={difficultyDistribution.easy}
            onChange={(e) =>
              setDifficultyDistribution({ ...difficultyDistribution, easy: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Medium (%):</label>
          <input
            type="number"
            value={difficultyDistribution.medium}
            onChange={(e) =>
              setDifficultyDistribution({ ...difficultyDistribution, medium: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Hard (%):</label>
          <input
            type="number"
            value={difficultyDistribution.hard}
            onChange={(e) =>
              setDifficultyDistribution({ ...difficultyDistribution, hard: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Generate Paper</button>
      </form>
    </div>
  );
};

export default QuestionPaperForm;
