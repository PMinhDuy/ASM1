import { type AxiosResponse } from 'axios';
import axiosRequest from './request';

interface PostsResponseInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async (): Promise<AxiosResponse<PostsResponseInterface>> => {
  return await axiosRequest.get<PostsResponseInterface>('https://jsonplaceholder.typicode.com/posts');
};
