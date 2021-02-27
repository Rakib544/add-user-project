import React, { useState } from 'react';
import './App.css';
import Users from './components/Users/Users';
import FakeData from './fakeData/fakeData';

function App() {
  const [users, setUsers] = useState(FakeData);
  const [selectUser, setSelectUser] = useState([]);

  const handleAddUserBtn = u => {
    const newList = [...selectUser, u];
    setSelectUser(newList)
  }
  
  return (
    <div className="App">
      <Users users={users} handleAddUserBtn = {handleAddUserBtn} selectUser = {selectUser} />
    </div>
  );
}

export default App;
