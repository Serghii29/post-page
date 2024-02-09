import React from 'react';
import { useGetPostsQuery } from '../services/posts';
import { PostItem } from '../PostItem';

export const PostsList: React.FC = () => {
  const { data } = useGetPostsQuery();

  return (
    <div className="space-y-8">
      {data?.map((post) => (
        <div className="space-y-2">
          <PostItem key={post.id} post={post} />
        </div>
      ))}
    </div>
  );
};
