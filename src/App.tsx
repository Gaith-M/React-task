import React, { useState } from "react";
import CardsContainer from "./Components/cardsContainer/CardsContainer";
import Intro from "./Components/intro/Intro";
import AppContext from "./context";
const App: React.FC = () => {
  const [users, setUsers] = useState<[] | any>([]);

  const start_task = (data: []) => {
    setUsers(data);
  };

  const deleteUser = (id: number) => {
    const new_users: {}[] = users.filter(
      (user: { id: number }) => user.id !== id
    );
    setUsers(new_users);
  };

  const updateUser = (
    name: string,
    username: string,
    email: string,
    phone: string,
    id: number
  ) => {
    const new_users = users.map((user: { id: number }) => {
      if (user.id === id) {
        return {
          ...user,
          name,
          username,
          email,
          phone,
        };
      } else {
        return user;
      }
    });

    setUsers(new_users);
  };

  return (
    <div>
      <AppContext.Provider
        value={{ users, deleteUser, updateUser, start_task }}
      >
        <Intro />
        <CardsContainer />
      </AppContext.Provider>
    </div>
  );
};

export default App;
