import React from 'react';
import './App.scss';
import { PostsList } from './PostsList';
import { ButtonRefresh } from './ButtonRefresh/ButtonRefresh';

const App: React.FC = () => (
  <div className="container">
    <ButtonRefresh />
    <PostsList />
  </div>
);

export default App;
