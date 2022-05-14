import Page from './components/principal/Page';
import Reporte from './components/principal/reporte';
import {Route,Routes, BrowserRouter} from 'react-router-dom';


const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page/>} />
        <Route path="/reporte" element={<Reporte/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App