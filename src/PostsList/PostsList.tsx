import React from 'react';
import { Loader } from 'semantic-ui-react';
import { useGetPostsQuery } from '../services/posts';
import { PostItem } from '../PostItem';
import './PostList.scss';

export const PostsList: React.FC = () => {
  const { data, isError, isFetching } = useGetPostsQuery();

  if (isError) {
    return <div>Error: something went wrong(((</div>;
  }

  if (isFetching) {
    return <Loader>Loading...</Loader>;
  }

  return (
    <div className="list-container">
      {data?.map((post) => (
        <div className="item-container" key={post.id}>
          <PostItem post={post} />
        </div>
      ))}
    </div>
  );
};
