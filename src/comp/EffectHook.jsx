import { useState } from "react";
import { useEffect } from "react";

export default function Disney() {
  const [item, setItems] = useState([]);
  // useeffect only runs once state change does not cause the function to run again
  useEffect(function () {
    async function fetchData() {
      const response = await fetch("https://api.disneyapi.dev/character");
      const data = await response.json();
      console.log(data);
      setItems(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Disney Characters</h1>
      {item.map(function (post) {
        return (
          <>
            <h1 key={post._id}>{post.films}</h1>;<h2>{post.name}</h2>
            <img src={post.imageUrl} alt={post.name} />
          </>
        );
      })}
    </div>
  );
}
