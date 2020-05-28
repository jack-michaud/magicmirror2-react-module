import { hot } from 'react-hot-loader/root';
import React, { useContext } from 'react';

import ModuleContext from './contexts/module';

const App = () => {
  const module = useContext(ModuleContext);
  return (
    <div className="gradient">
      React Starter: { module.name }
    </div>
  )
};

export default hot(App);
