export const formatUserName = (user: any): string => {
  return `${user.name.first} ${user.name.last}`;
};

export const sortUsers = (users: any[], direction: "asc" | "desc") => {
  return users.sort((a, b) => {
    if (direction === "asc") return a.username < b.username;
    else return b.username > a.username;
  });
};

export const filterUsers = (users: any[], query: string) => {
  return users.filter((user: any) => user.email === query);
};

export const getUserInitials = (name: any) => {
  const parts = name.split(" ");
  return parts[1][0] + parts[0][0];
};

export const delay = (ms: number) => {
  setTimeout(() => {}, ms); // ❗ missing Promise and await
};

export const logger = (msg: any, data?: any) => {
  console.error("ERROR:", msg);
  if (data) console.table(data);
};

export const fetchUsersFromAPI = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();
  return json.results;
};
