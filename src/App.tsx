import React from 'react';
import './App.css';
import { Person,Country } from './components/Person';

function App() {
  // const getAge = (name:string): number =>{
  // } // This shows how to type cast in react typescript
  return (
    <div className="App">
      <Person
      name="Martin"
      email="martineelucky1996@gmail.com"
      age={26}
      isMarried={true}
      friends={['Kelvin', 'Eric' , 'Kenneth' , 'Mary']}
      country={Country.Canada}
      />

    </div>
  );
}

export default App;
