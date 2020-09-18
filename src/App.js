import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Home</h2>
      </header>
      <section className='card'>
        <div className='info'>

        </div>
        <div className='page'>
          <p>1/25</p>
        </div>
      </section>
      <div className='buttons'>
        <a href=''>Prev</a>
        <div className='mid-buttons'>
          <button>Edit</button>
          <button>Delete</button>
          <button>New</button>
        </div>
        <a href=''>Next</a>
      </div>
    </div>
  );
}

export default App;
