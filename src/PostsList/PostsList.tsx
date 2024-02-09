import React, { useCallback, useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';
import { Pagination, Stack } from '@mui/material';
import { useGetPostsQuery } from '../services/posts';
import { PostItem } from '../PostItem';
import { IPost } from '../types/post';
import './PostList.scss';

export const PostsList: React.FC = React.memo(() => {
  const { data: posts, isError, isFetching } = useGetPostsQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const [paginationList, setPaginationList] = useState<IPost[] | undefined>([]);
  const [countPage, setCountPage] = useState(0);

  const preparePostList = async () => {
    if (posts) {
      const preparedPosts = posts?.slice((currentPage - 1) * 5, currentPage * 5);

      setPaginationList(preparedPosts);
    }
  };

  const handlerChangePage = useCallback((
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    window.location.href = '#top';
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    if (posts?.length) {
      setCountPage(posts.length / 5);
    }
  }, [posts]);

  useEffect(() => {
    preparePostList();
  }, [currentPage, posts]);

  if (isError) {
    return <div>Error: something went wrong(((</div>;
  }

  return (
    <div>
      {(isFetching || !posts?.length) ? (
        <Bars
          height="80"
          width="80"
          color="#377d8c"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible
        />
      ) : (
        <div className="list-container">
          {paginationList?.map((post) => (
            <div className="item-container" key={post.id}>
              <PostItem post={post} />
            </div>
          ))}

          <Stack spacing={2}>
            <Pagination
              count={countPage}
              page={currentPage}
              variant="outlined"
              color="primary"
              onChange={handlerChangePage}
            />
          </Stack>
        </div>
      )}
    </div>
  );
});
