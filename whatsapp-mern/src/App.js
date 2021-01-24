import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />   
      </div>
    </div>
  );
}

export default App;
