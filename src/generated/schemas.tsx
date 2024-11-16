import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
}

/** category  */
export interface Category {
  __typename?: 'Category';
  creationAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  products: Product[];
  updatedAt: Scalars['DateTime'];
}

export interface CreateCategoryDto {
  image: Scalars['String'];
  name: Scalars['String'];
}

export interface CreateProductDto {
  categoryId: Scalars['Float'];
  description: Scalars['String'];
  images: Array<Scalars['String']>;
  price: Scalars['Float'];
  title: Scalars['String'];
}

export interface CreateUserDto {
  avatar: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
}

/** Login  */
export interface Login {
  __typename?: 'Login';
  access_token: Scalars['String'];
  refresh_token: Scalars['String'];
}

export interface Mutation {
  __typename?: 'Mutation';
  addCategory: Category;
  addProduct: Product;
  addUser: User;
  deleteCategory: Scalars['Boolean'];
  deleteProduct: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Login;
  refreshToken: Login;
  updateCategory: Category;
  updateProduct: Product;
  updateUser: User;
}

export interface MutationAddCategoryArgs {
  data: CreateCategoryDto;
}

export interface MutationAddProductArgs {
  data: CreateProductDto;
}

export interface MutationAddUserArgs {
  data: CreateUserDto;
}

export interface MutationDeleteCategoryArgs {
  id: Scalars['ID'];
}

export interface MutationDeleteProductArgs {
  id: Scalars['ID'];
}

export interface MutationDeleteUserArgs {
  id: Scalars['ID'];
}

export interface MutationLoginArgs {
  email: Scalars['String'];
  password: Scalars['String'];
}

export interface MutationRefreshTokenArgs {
  refreshToken: Scalars['String'];
}

export interface MutationUpdateCategoryArgs {
  changes: UpdateCategoryDto;
  id: Scalars['ID'];
}

export interface MutationUpdateProductArgs {
  changes: UpdateProductDto;
  id: Scalars['ID'];
}

export interface MutationUpdateUserArgs {
  changes: UpdateUserDto;
  id: Scalars['ID'];
}

/** product  */
export interface Product {
  __typename?: 'Product';
  category: Category;
  creationAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  images: Array<Scalars['String']>;
  price: Scalars['Float'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
}

export interface Query {
  __typename?: 'Query';
  categories: Category[];
  category: Category;
  isAvailable: Scalars['Boolean'];
  myProfile: User;
  product: Product;
  products: Product[];
  user: User;
  users: User[];
}

export interface QueryCategoryArgs {
  id: Scalars['ID'];
}

export interface QueryIsAvailableArgs {
  email: Scalars['String'];
}

export interface QueryProductArgs {
  id: Scalars['ID'];
}

export interface QueryProductsArgs {
  categoryId?: InputMaybe<Scalars['Float']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  price_max?: InputMaybe<Scalars['Int']>;
  price_min?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface QueryUserArgs {
  id: Scalars['ID'];
}

export interface QueryUsersArgs {
  limit?: InputMaybe<Scalars['Float']>;
}

export enum Role {
  Admin = 'admin',
  Customer = 'customer',
}

export interface UpdateCategoryDto {
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}

export interface UpdateProductDto {
  categoryId?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  price?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface UpdateUserDto {
  avatar?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
}

/** product  */
export interface User {
  __typename?: 'User';
  avatar: Scalars['String'];
  creationAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  updatedAt: Scalars['DateTime'];
}

export const AddUserDocument = gql`
  mutation addUser($input: CreateUserDto!) {
    addUser(data: $input) {
      id
      name
      avatar
    }
  }
`;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddUserMutation(
  baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
}
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const LoginDocument = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetCategoriesDocument = gql`
  query getCategories {
    categories {
      id
      name
      image
    }
  }
`;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
}
export function useGetCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
}
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetCategoryByIdDocument = gql`
  query getCategoryById($id: ID!) {
    category(id: $id) {
      id
      name
      image
    }
  }
`;

/**
 * __useGetCategoryByIdQuery__
 *
 * To run a query within a React component, call `useGetCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryByIdQuery(
  baseOptions: Apollo.QueryHookOptions<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>(GetCategoryByIdDocument, options);
}
export function useGetCategoryByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>(GetCategoryByIdDocument, options);
}
export type GetCategoryByIdQueryHookResult = ReturnType<typeof useGetCategoryByIdQuery>;
export type GetCategoryByIdLazyQueryHookResult = ReturnType<typeof useGetCategoryByIdLazyQuery>;
export type GetCategoryByIdQueryResult = Apollo.QueryResult<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>;
export const GetProductsDocument = gql`
  query getProducts(
    $limit: Int
    $offset: Int
    $price: Int
    $price_min: Int
    $price_max: Int
    $title: String
    $categoryId: Float
  ) {
    products(
      limit: $limit
      offset: $offset
      price: $price
      price_min: $price_min
      price_max: $price_max
      title: $title
      categoryId: $categoryId
    ) {
      id
      title
      images
      price
    }
  }
`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      price: // value for 'price'
 *      price_min: // value for 'price_min'
 *      price_max: // value for 'price_max'
 *      title: // value for 'title'
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useGetProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
}
export function useGetProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export type AddUserMutationVariables = Exact<{
  input: CreateUserDto;
}>;

export interface AddUserMutation {
  __typename?: 'Mutation';
  addUser: { __typename?: 'User'; id: string; name: string; avatar: string };
}

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export interface LoginMutation {
  __typename?: 'Mutation';
  login: { __typename?: 'Login'; access_token: string; refresh_token: string };
}

export type GetCategoriesQueryVariables = Exact<Record<string, never>>;

export interface GetCategoriesQuery {
  __typename?: 'Query';
  categories: Array<{ __typename?: 'Category'; id: string; name: string; image: string }>;
}

export type GetCategoryByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export interface GetCategoryByIdQuery {
  __typename?: 'Query';
  category: { __typename?: 'Category'; id: string; name: string; image: string };
}

export type GetProductsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  price_min?: InputMaybe<Scalars['Int']>;
  price_max?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['Float']>;
}>;

export interface GetProductsQuery {
  __typename?: 'Query';
  products: Array<{ __typename?: 'Product'; id: string; title: string; images: string[]; price: number }>;
}
