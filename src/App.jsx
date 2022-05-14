import { useState } from 'react';
import Page from './components/principal/Page';

const App = () => {

  const [modal, setModal] = useState(false);

  return (
    <>
      <Page/>
    </>
  )
}

export default App