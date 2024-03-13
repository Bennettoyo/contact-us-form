import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form has been submitted!\n Name: ${formData.name} \n Email: ${formData.email} \n Subject ${formData.subject} \n Message: ${formData.message}`)
  };


  return (
    <div className="App">
      <header className="App-header">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <h3>Send me a message</h3>
          <p>Feel free to get in touch and contact me with anything related to my CV or projects!</p>
          <div className='form-row'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder='Enter your name'
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-row'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder='Enter your email'
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-row'>
            <label htmlFor="subject">Subject</label>
            <input
              type="subject"
              placeholder='Enter your subject'
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-row'>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder='Enter your message'
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              style={{ resize: 'none' }} 
              required
            />
          </div>
          <button className='button' type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}


export default App;
