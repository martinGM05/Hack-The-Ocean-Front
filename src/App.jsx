import Page from './components/principal/Page';
import Reporte from './components/principal/reporte';
import {Route,Routes, BrowserRouter} from 'react-router-dom';
import EspeciesProvider from './context/Especies/EspeciesProvider';
import Especie from './components/principal/Especie';

const App = () => {

  return (
    <EspeciesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page/>} />
          <Route path="/reporte" element={<Reporte/>} />
          <Route path='/animal/:id' element={<Especie/>} />
        </Routes>
      </BrowserRouter>
    </EspeciesProvider>
  )
}

export default App