import { useEffect, useState } from "react";
import { fakeApi } from "./api";

type User = {
  id: number;
  name: string;
};

export default function App() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    (async () => {
      const data = await fakeApi();
      const users: User[] = data.map((responseUser: any) => ({
        id: responseUser.id,
        name: responseUser.name,
      }));
      setUsers(users);
    })();
  }, []);

  return (
    <div className="App">
      <ul>
        {users?.map((user: User) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}
