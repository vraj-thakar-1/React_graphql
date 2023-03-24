import React from "react";
import "./Character.css";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);
  if (loading) return <div>spinner...</div>;
  if (error) return <div>something went wrong...</div>;
  console.log({ error, loading, data });

  return (
    <div className="Character">
      <img src={data.character.image} alt="...." width={500} height={500} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.slice(0, 10).map((ele, id) => {
            return (
              <li key={id}>
                {ele.name} {ele.episode}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
