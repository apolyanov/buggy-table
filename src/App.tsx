import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import UserTable from "./components/UserTable";
import {
  fetchUsersFromAPI,
  sortUsers,
  filterUsers,
  logger,
  delay,
} from "./utils/utils";

const App = () => {
  const [data, setData] = useState<any[]>(null); // ❗ starts with null
  const [search, setSearch] = useState<any>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await fetchUsersFromAPI(); // ❗ wrong endpoint + results expected
        await delay(500); // ❗ this delay does nothing
        const filtered = filterUsers(users, search); // ❗ strict match only
        const sorted = sortUsers(filtered, "asc"); // ❗ broken sorting
        setData(sorted);
        logger("Fetched and processed users", sorted); // ❗ always logs as error
      } catch (err: any) {
        logger("Something went wrong while fetching", err);
      }
    };

    fetchData();
  }, []); // ❗ infinite loop

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>
      <UserTable users={data} />
    </Container>
  );
};

export default App;
