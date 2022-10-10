import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function List() {
  const [artists, setArtists] = useState(initialArtists);


  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(({ id, name }) => (
          <li key={id}>
            {name}{" "}
            <button
              onClick={() => {
                setArtists(artists.filter(({id}) => id !== id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
