import React, { useContext } from "react";
import Card from "../card/Card";
import AppContext from "../../context";

function CardsContainer() {
  const Container = {
    display: "flex",
    justifyContent: "spaceEvenly",
  };

  let context = useContext(AppContext);

  return (
    <section
      style={{
        ...Container,
        flexWrap: "wrap",
        padding: context.users.length > 0 ? "2em 0.5em" : 0,
      }}
    >
      {context.users.length > 0
        ? context.users.map(
            (user: {
              name: string;
              username: string;
              email: string;
              phone: string;
              id: number;
            }) => (
              <Card
                user={user}
                deleteUser={context.deleteUser}
                updateUser={context.updateUser}
                key={user.name}
              />
            )
          )
        : null}
    </section>
  );
}

export default CardsContainer;
