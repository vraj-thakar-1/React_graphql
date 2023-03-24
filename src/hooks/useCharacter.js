import { useQuery, gql } from "@apollo/client";
const GET_CHARACTER_BY_ID = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      id
      gender

      episode {
        name
        episode
      }
    }
  }
`;
export const useCharacter = (id) => {
  const { error, data, loading } = useQuery(GET_CHARACTER_BY_ID, {
    variables: {
      id,
    },
  });

  return { error, data, loading };
};
