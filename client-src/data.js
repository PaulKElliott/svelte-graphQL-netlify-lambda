import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

export const client = new ApolloClient({
  uri: '/.netlify/functions/graphQLEndpoint'
});


export const MESSAGES = gql`
  query allMessages($size: Int, $cursor: String)  {
    messages(_size: $size, _cursor: $cursor) {
      data {
        _id
        author
        text
      }
      before
      after
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation AddMessage($author: String!, $text: String!) {
    createMessage(data: {author: $author, text: $text}) {
      _id
      author
      text
    }
  }
`;