import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import Nosotros from './components/Nosotros';
import Contactos from './components/Contactos';
import Inicio from './components/Inicio';
import NavBarExample from './layouts/navbar';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Inicio /> } />
    <Route path='Nosotros' element={ <Nosotros /> } />
    <Route path='Contactos' element={ <Contactos /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;