import './App.css';
import './css/style.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';

const App = () => {
  return (
    <>
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/starred' element={<Starred/>}></Route>
          <Route path='/show/:id' element={<Show />}>
          </Route>
          <Route>not fount 404</Route>
        </Routes>
        
    </div>
    </>
  );
}

export default App;
