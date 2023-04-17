import logo from './logo.svg';
import './App.css';
import Frontpage from './components/Frontpage';
import Show from './components/Show';
import { Route, Routes } from 'react-router-dom';
import AddShow from './components/AddShow';

function App() {
  return (
    <section>
      <h1>Tv-serier</h1>
    <Routes>
      <Route path="/" index element={<Frontpage />} />
      <Route path=":id" element={<Show />} />
      <Route path="/add-show" element={<AddShow />} />
    </Routes>
    </section>
   
  );
}

export default App;
