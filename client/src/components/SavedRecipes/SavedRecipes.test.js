import React from 'react';
import ReactDOM from 'react-dom';
import SavedRecipes from './SavedRecipes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SavedRecipes  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
