import React from 'react';
import { useGetPostsQuery } from '../services/posts';
import './ButtonRefresh.scss';

export const ButtonRefresh: React.FC = React.memo(() => {
  const { refetch } = useGetPostsQuery();

  return (
    <button className="button-refresh" type="button" onClick={refetch}>
      Refetsh Posts
    </button>
  );
});
