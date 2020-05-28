import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

Module.register('reactTest', {
  getStyles() {
    return ['react.css'];
  },
  renderedReact: false, // On first DOM render, this will be true
  getDom() {
    const root = document.createElement('div');
    const root_id = `${this.name}-react-root`;

    root.id = root_id;
    root.innerText = 'React...';

    if (!this.renderedReact) {
      this.renderedReact = true;
      ReactDOM.render(<App/>, root);
    }

    return root;
  }
});

export default {};
