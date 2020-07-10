import { hot } from 'react-hot-loader/root';
import React, { useContext } from 'react';

import ModuleContext from './contexts/module';

const App = () => {
  const module = useContext(ModuleContext);
  return (
    <div className="fixed gradient inset-x-0 bottom-0 uppercase text-black" style={{height: '1.4in'}}>
      <div className="flex items-center justify-center h-full">
        Family Home {{ module.config.version }}
      </div>
    </div>
  )
};

export default hot(App);
