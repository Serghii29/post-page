import React, { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import { useGetPostsQuery } from '../services/posts';
import { PostItem } from '../PostItem';
import { IPost } from '../types/post';
import './PostList.scss';

export const PostsList: React.FC = () => {
  const { data: posts, isError, isFetching } = useGetPostsQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const [paginationList, setPaginationList] = useState<IPost[] | undefined>([]);

  const preparedPostList = async () => {
    const preparedPosts = posts?.slice((currentPage - 1) * 5, currentPage * 5);

    setPaginationList(preparedPosts);
  };

  useEffect(() => {
    preparedPostList();
  }, [currentPage, posts]);

  if (isError) {
    return <div>Error: something went wrong(((</div>;
  }

  if (isFetching) {
    return <Loader>Loading...</Loader>;
  }

  return (
    <div className="list-container">
      {paginationList?.map((post) => (
        <div className="item-container" key={post.id}>
          <PostItem post={post} />
        </div>
      ))}

      <button onClick={() => setCurrentPage(currentPage - 1)} type="button">
        Previous Page
      </button>
      <button onClick={() => setCurrentPage(currentPage + 1)} type="button">
        Next Page
      </button>
    </div>
  );
};
