import './App.css';
import { FiBookOpen } from 'react-icons/fi';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='task-app'>
      <h1>
        ToDo List
        <FiBookOpen className='icon-app' />
      </h1>
      <TaskList />
    </div>
  );
}

export default App;