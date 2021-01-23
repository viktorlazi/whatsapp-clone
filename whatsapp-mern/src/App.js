import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <DonutLargeIcon/>
      <Chat />    
    </div>
  );
}

export default App;
