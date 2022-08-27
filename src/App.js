import './App.css';

import Header from './components/Header/Header.component';
import Sidebar from './components/Sidebar/Sidebar.component'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appBody">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
