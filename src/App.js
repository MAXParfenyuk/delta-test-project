import React from 'react';
import Header from './components/Header';
// import NameInput from './components/NameInput';
 import DescriptionTextarea from './components/DescriptionTextarea';
 import Table from './components/Table';
import './App.css';


function App() {
  return (
      <div className="App">
        <Header />
        <div className="container mx-auto p-4">
          {/*<NameInput />*/}
          <DescriptionTextarea />
          <Table />
        </div>
      </div>
  );
}

export default App;
