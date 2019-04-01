import React from 'react';
import ReactDOM from 'react-dom';
import nav from './nav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<nav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
