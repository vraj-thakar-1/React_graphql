import { useQuery, gql } from "@apollo/client";
const GET_CHARACTER = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
const useCharacters = () => {
  const { error, data, loading } = useQuery(GET_CHARACTER);

  return { error, data, loading };
};

export default useCharacters;
