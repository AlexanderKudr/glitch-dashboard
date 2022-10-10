import { Grid, Text, Title, Box, Table } from "@mantine/core";
import { TableComp } from "../../components/Table/TableComp";
import { activities } from "../../utils/RecentActivities";
import { useState } from "react";
export const Logs = () => {
  //test
  const [artists, setArtists] = useState([
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
  ]);
  const artistList = artists.map(({ id, name }) => {
    return (
      <li key={id}>{name}
        <button onClick={() => {filterHandle(id)}}>
          Delete
        </button>
      </li>
    );
  });
  const filterHandle = (id: any) => {
    setArtists(artists.filter((a) => a.id !== id));
  };
  //test
  return (
    <>
      <Title p="sm" color="var(--logo-text)" order={3} weight={600}>
        Logs
      </Title>
      <Text p="sm" style={{ color: "var(--secondary-text" }}>
        History of changes goes here:
      </Text>
      <Grid justify="center" m="sm">
        <Grid.Col
          style={{
            border: "1px var(--divider-bl) solid",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          <TableComp tableContent={activities} />
        </Grid.Col>
      </Grid>
      <div className="test">
        <h1>Inspiring sculptors:</h1>
        <ul>{artistList}</ul>
      </div>
    </>
  );
};
