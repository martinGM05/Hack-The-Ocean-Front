import Page from './components/principal/Page';
import {Route,Routes, BrowserRouter} from 'react-router-dom';

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App