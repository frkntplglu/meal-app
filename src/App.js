import React from 'react';

import {BrowserRouter} from 'react-router-dom';
import Kitchen from './Kitchen';


function App(props) {

  return (
    <BrowserRouter>
      <Kitchen />
    </BrowserRouter>
  );
}

export default App;
