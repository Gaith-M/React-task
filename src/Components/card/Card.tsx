import React, { useState } from "react";
import { CardProps } from "../../interface";
import CardUI from "./CardUI";

function Card({ user, deleteUser, updateUser }: CardProps) {
  const { name, username, phone, email } = user;
  // card state
  const [editMode, toggleEditMode] = useState<boolean>(false);
  const [currentName, setCurrentName] = useState<string>(name);
  const [currentUsername, setCurrentUsername] = useState<string>(username);
  const [currentEmail, setCurrentEmail] = useState<string>(email);
  const [currentPhone, setCurrentPhone] = useState<string>(phone);

  function handleChange(fieldName: string, value: string) {
    switch (fieldName) {
      case "currentName":
        setCurrentName(value);
        break;
      case "currentUsername":
        setCurrentUsername(value);
        break;
      case "currentEmail":
        setCurrentEmail(value);
        break;
      case "currentPhone":
        setCurrentPhone(value);
        break;
      default:
        return null;
    }
  }
  function handleUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    handleChange(name, value);
  }

  return (
    <CardUI
      user={user}
      currentName={currentName}
      setCurrentName={setCurrentName}
      currentUsername={currentUsername}
      setCurrentUsername={setCurrentUsername}
      currentEmail={currentEmail}
      setCurrentEmail={setCurrentEmail}
      currentPhone={currentPhone}
      setCurrentPhone={setCurrentPhone}
      editMode={editMode}
      toggleEditMode={toggleEditMode}
      handleUpdate={handleUpdate}
      deleteUser={deleteUser}
      updateUser={updateUser}
    />
  );
}

export default Card;
