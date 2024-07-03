import React, { useState } from 'react';
import QuestionPaperForm from './components/QuestionPaperForm';
import QuestionPaper from './components/QuestionPaper';
import './App.css';

function App() {
  const [questionPaper, setQuestionPaper] = useState(null);

  const handleGeneratePaper = (paper) => {
    setQuestionPaper(paper);
  };

  return (
    <div className="App">
      <h1>Question Paper Generator</h1>
      <QuestionPaperForm onGeneratePaper={handleGeneratePaper} />
      {questionPaper && <QuestionPaper paper={questionPaper} />}
    </div>
  );
}

export default App;
