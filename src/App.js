
import './App.css';
import TodoDisplay from './components/TodoDisplay';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList/>
      <TodoDisplay/>
    </div>
  );
}

export default App;
