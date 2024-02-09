import React from 'react';
import { IPost } from '../types/post';
import './PostItem.scss';

type Props = {
  post: IPost;
};

export const PostItem: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="post-title">{post.title}</h2>
    <p>{post.body}</p>
  </>
);
