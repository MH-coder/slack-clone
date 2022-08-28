import './App.css';

import Header from './components/Header/Header.component';
import Sidebar from './components/Sidebar/Sidebar.component'
import Chat from './routes/Chat/Chat.component';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="appBody">
          <Sidebar />
          <Routes>
            <Route path='/room/:roomId' element={<Chat />} />
          </Routes>


        </div>
      </div>
    </Router>
  );
}

export default App;
