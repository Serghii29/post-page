import React from 'react';
import { IPost } from '../types/post';

type Props = {
  post: IPost;
};

export const PostItem: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="text-3xl font-bold tracking-tight">{post.title}</h2>
    <p className="text-gray-500 dark:text-gray-400">{post.body}</p>
  </>
);
