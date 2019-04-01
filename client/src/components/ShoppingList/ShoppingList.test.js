import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingList from './ShoppingList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShoppingList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
