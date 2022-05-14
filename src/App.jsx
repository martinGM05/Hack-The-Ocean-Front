import Page from './components/principal/Page';
import Reporte from './components/principal/reporte';
import {Route,Routes, BrowserRouter} from 'react-router-dom';
import EspeciesProvider from './context/Especies/EspeciesProvider';

const App = () => {

  return (
    <EspeciesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page/>} />
          <Route path="/reporte" element={<Reporte/>} />
        </Routes>
      </BrowserRouter>
    </EspeciesProvider>
  )
}

export default App