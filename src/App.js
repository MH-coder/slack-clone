import './App.css';

import Header from './components/Header/Header.component';
import Sidebar from './components/Sidebar/Sidebar.component'
import Chat from './routes/Chat/Chat.component';
import Login from './routes/Login/Login.component';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useContext, useState } from 'react';
import { UserContext } from './context/UserContext/userContext';

const Welcome = () => {
  return (
    <h1>Welcome</h1>
  )
}

function App() {
  const { user } = useContext(UserContext)
  console.log(user);

  return (
    <Router>
      <>
        {!user ? <Login /> :
          <div className="App">
            <Header />
            <div className="appBody">
              <Sidebar />
              <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/room/:roomId' element={<Chat />} />
              </Routes>
            </div>
          </div>
        }
      </>
    </Router>
  );
}

export default App;
