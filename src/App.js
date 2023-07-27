import './App.css';
import LawyerTable from './components/LawyerTable';
import { DragDropContext} from 'react-beautiful-dnd';


function App() {
  return (
    <DragDropContext>
      <div className="App">
     <LawyerTable/>
    </div>
    </DragDropContext>
    
  );
}

export default App;
