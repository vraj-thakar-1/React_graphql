import React from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_CHARACTER_LOCATION = gql`
  query GetLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;
const Search = () => {
  const [name, setName] = useState(" ");
  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATION,
    {
      variables: {
        name,
      },
    }
  );
  console.log({ loading, error, data, called });

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div> spinner....</div>}
      {error && <div> something went wrong....</div>}
      {data && (
        <ul>
          {data.characters.results.map((ch) => (
            <li>{ch.location.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
