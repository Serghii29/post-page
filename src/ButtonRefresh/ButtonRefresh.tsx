import React from 'react';
import { useGetPostsQuery } from '../services/posts';
import './ButtonRefresh.scss';

export const ButtonRefresh: React.FC = () => {
  const { refetch } = useGetPostsQuery();

  const handlerRefresh = () => {
    refetch();
  };

  return (
    <button
      className="button-refresh"
      type="button"
      onClick={handlerRefresh}
    >
      Refresh Posts
    </button>
  );
};
