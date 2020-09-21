import React, { Component } from 'react';
import './App.css';
import Movies from './Components/Movies';
import Basic from './Components/Basic';
 

class App extends Component {
  constructor(){
    super();
    this.state = {
      id: 1
    }
  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <h2>Home</h2>
      </header>
      <section className='card'>
        <div className='info'>
          <div>
            <Basic userId={this.state.id} />
          </div>
          <div className='favMovies'>
            <h1>Favorite Movies:</h1>
            <Movies userId={this.state.id} />
          </div>
        </div>
        <div className='page'>
          <p>{this.state.id}/25</p>
        </div>
      </section>
      <div className='buttons'>
        <a href='#' onClick={() => {if(this.state.id >= 2) this.setState({ id: this.state.id - 1})}}>Prev</a>
        <div className='mid-buttons'>
          <button>Edit</button>
          <button>Delete</button>
          <button>New</button>
        </div>
        <a href='#' onClick={() => {if(this.state.id <= 24) this.setState({ id: this.state.id + 1})}}>Next</a>
      </div>
    </div>
    );
  }
}

export default App;