import { useState } from 'react';
import Content from './components/panel/Content';
import Modal from './components/layouts/modal';
import Page from './components/principal/Page';

const App = () => {

  const [modal, setModal] = useState(false);

  return (
    <>
      <Content/>
      <button className='openModalBtn' 
        onClick={() => setModal(true)}
      >Open Modal</button>
      {modal && <Modal closeModal={setModal}/>}
    </>
  )
}

export default App