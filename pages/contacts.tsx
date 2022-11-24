import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const url = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function Contacts() {
  const { data, error } = useSWR(url, fetcher);

  return (
    <div>
      <h1>CONTACTS</h1>
      {data
        ? data.map((user: User) => {
            return (
              <div key={user.id}>
                <h1>{user.email}</h1>
              </div>
            );
          })
        : ""}
    </div>
  );
}
