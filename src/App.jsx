import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import FinalPage from './components/FinalPage/FinalPage';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({}); // State to store form data

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({}); // Reset form data when going back to the form
  };

  return (
    <div>
      {!isSubmitted ? (
        <Form setIsSubmitted={setIsSubmitted} setFormData={setFormData} />
      ) : (
        <FinalPage onReset={resetForm} formData={formData} />
      )}
    </div>
  );
}

export default App;

