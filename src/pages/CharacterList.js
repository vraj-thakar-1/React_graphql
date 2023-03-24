import React from "react";
import { Link } from "react-router-dom";
import "./CharacterList.css";
import useCharacters from "../hooks/useCharacters";

const CharacterList = () => {
  const { error, loading, data } = useCharacters();
  if (loading) return <div>spinner...</div>;
  if (error) return <div>something went wrong...</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((chr, id) => {
        return (
          <Link to={`/${chr.id}`} key={id}>
            <img src={chr.image} alt="...." />
            <h2> {chr.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default CharacterList;
