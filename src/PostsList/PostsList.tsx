import React from 'react';
import { useGetPostsQuery } from '../services/posts';
import { PostItem } from '../PostItem';
import './PostList.scss';

export const PostsList: React.FC = () => {
  const { data } = useGetPostsQuery();

  return (
    <div className="list-container">
      {data?.map((post) => (
        <div className="item-container">
          <PostItem key={post.id} post={post} />
        </div>
      ))}
    </div>
  );
};
