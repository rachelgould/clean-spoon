import React from 'react';
import ReactDOM from 'react-dom';
import YourFridge from './YourFridge';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YourFridge />, div);
  ReactDOM.unmountComponentAtNode(div);
});
