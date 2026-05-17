import React, { useState } from 'react';

const LoveCalculator = () => {
  const [yourName, setYourName] = useState('');
  const [herName, setHerName] = useState('');
  const [score, setScore] = useState(null);

  const generateScore = (e) => {
    e.preventDefault();
    // Generates a random number between 1 and 100
    const newScore = Math.floor(Math.random() * 100) + 1;
    setScore(newScore);
  };

  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center', 
      fontFamily: 'cursive', 
      border: '2px solid pink', 
      borderRadius: '15px',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <h2>Chance & Permutations</h2>
      <p style={{ fontSize: '0.9rem', color: '#666' }}>
        <em>
          This app is about making fun with computer chance. Who knows whether 
          God can speak to you through it. However, it is merely based on computer 
          chance which may or may not tally with divine chance. Have fun.
        </em>
      </p>

      <form onSubmit={generateScore}>
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={yourName} 
            onChange={(e) => setYourName(e.target.value)}
            required 
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            placeholder="Her Name" 
            value={herName} 
            onChange={(e) => setHerName(e.target.value)}
            required 
            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <button 
          type="submit" 
          style={{ 
            backgroundColor: '#ff4d6d', 
            color: 'white', 
            border: 'none', 
            padding: '10px 20px', 
            borderRadius: '20px', 
            cursor: 'pointer' 
          }}
        >
          Calculate Love Score
        </button>
      </form>

      {score !== null && (
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ color: '#ff4d6d' }}>Result:</h3>
          <p style={{ fontSize: '1.2rem' }}>
            <strong>{herName}'s</strong> love score for <strong>{yourName}</strong> is:
          </p>
          <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>
            {score}%
          </div>
          <p>
            {score > 70 ? "A match made in heaven!" : "The stars are still aligning."}
          </p>
        </div>
      )}
    </div>
  );
};

export default LoveCalculator;
