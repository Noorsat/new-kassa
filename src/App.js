import { Routes, Route } from 'react-router-dom';
import Schedule from './views/Schedule';
import './App.css';
import Seance from './views/Seance';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Schedule />} />
        <Route path=':id' element={<Seance />} />
      </Routes>
    </>
  );
}

export default App;
