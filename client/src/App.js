import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserProfile from './pages/UserProfile'; // Import UserProfile component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Remove the logo and default content */}
        <UserProfile /> {/* Render UserProfile component */}
      </header>
    </div>
  );
}

export default App;
