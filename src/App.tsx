import React from 'react';
import { PostsList } from './PostsList';
import { ButtonRefresh } from './ButtonRefresh';
import './App.scss';

const App: React.FC = () => (
  <div className="app-container">
    <ButtonRefresh />
    <PostsList />
  </div>
);

export default App;
